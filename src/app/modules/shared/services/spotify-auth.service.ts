import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { invoke } from '@tauri-apps/api';
import { WindowManager } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';
import { SpotifyTokenData } from '../types';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class SpotifyAuthService {
	$tokenData = new BehaviorSubject<SpotifyTokenData | null>(null);
	$isAuth = this.$tokenData.pipe(
		tap(this.onChangeTokens.bind(this)),
		map((data) => Boolean(data))
	);

	private scopes = [
		'user-read-private',
		'user-read-email',
		'playlist-read-private',
		'playlist-read-collaborative',
		'user-library-read',
	];
	private authUrl = this.buildAuthUrl();

	private buildAuthUrl(): string {
		const url = new URL('https://accounts.spotify.com/ru/authorize');
		url.searchParams.append('response_type', 'code');
		url.searchParams.append('redirect_uri', environment.localPseudoServer);
		url.searchParams.append('client_id', environment.clientId);
		url.searchParams.append('state', 'q7wjvc');
		url.searchParams.append('scope', this.scopes.join(' '));
		return url.toString();
	}

	constructor(
		private storageService: StorageService,
		private http: HttpClient
	) {
		this.storageService.read<SpotifyTokenData>('spotify_token').then((data) => {
			if (data) {
				this.$tokenData.next(data);
			}
		});
	}

	async login() {
		await invoke('create_auth_window', { uri: this.authUrl });
		const authWindow = new WindowManager('oauth_window');
		const unlisten = await listen(
			'change_navigation_url',
			async ({ payload }: { payload: string }) => {
				if (payload.indexOf(environment.localPseudoServer) === 0) {
					unlisten?.();
					authWindow.close();

					const searchParams = new URL(payload).searchParams;
					const code = searchParams.get('code') || '';
					this.getTokensFromCode(code).subscribe((data) => {
						this.$tokenData.next(data);
					});
				}
			}
		);
	}

	getTokensFromCode(code: string): Observable<SpotifyTokenData> {
		let body = new URLSearchParams();
		body.set('code', code);
		body.set('grant_type', 'authorization_code');
		body.set('redirect_uri', environment.localPseudoServer);
		return this.http.post<SpotifyTokenData>(
			'https://accounts.spotify.com/api/token',
			body,
			{
				headers: new HttpHeaders()
					.set(
						'Authorization',
						`Basic ${btoa(
							`${environment.clientId}:${environment.clientSecret}`
						)}`
					)
					.set('Content-Type', 'application/x-www-form-urlencoded'),
			}
		);
	}

	private onChangeTokens(tokens: SpotifyTokenData | null): void {
		if (tokens) {
			this.storageService.write('spotify_token', tokens);
		}
	}
}
