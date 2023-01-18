import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { SpotifyAuthService } from '../../shared/services/spotify-auth.service';

@Injectable()
export class SpotifyAuthInterceptor implements HttpInterceptor {
	constructor(private readonly spotifyAuthService: SpotifyAuthService) {}

	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		return this.spotifyAuthService.$tokenData.pipe(
			take(1),
			switchMap((tokens) => {
				const token = tokens?.access_token;

				if (!token) {
					return next.handle(req);
				}
				const headers = req.headers.set('Authorization', `Bearer ${token}`);
				const authReq = req.clone({
					headers,
				});

				return next.handle(authReq);
			})
		);
	}
}
