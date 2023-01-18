import { Injectable, OnInit } from '@angular/core';
import {
	take,
	distinctUntilChanged,
	single,
	tap,
	BehaviorSubject,
	switchMap,
} from 'rxjs';
import { SpotifyApiService } from '../../shared/services/spotify-api.service';

@Injectable({
	providedIn: 'root',
})
export class PlaylistController {
	$playlists = this.spotifyApi
		.getMyPlaylists()
		.pipe(take(1), distinctUntilChanged());
	$likedSongs = new BehaviorSubject<SpotifyApi.SavedTrackObject[]>([]);

	constructor(private readonly spotifyApi: SpotifyApiService) {}

	getLikedSongs() {
		this.spotifyApi
			.getMySavedTracks()
			.subscribe((data) => this.$likedSongs.next(data.items));
	}
}
