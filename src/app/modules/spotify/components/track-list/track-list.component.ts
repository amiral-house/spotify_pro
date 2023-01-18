import { Component, Input } from '@angular/core';

@Component({
	selector: 'sp-track-list',
	templateUrl: './track-list.component.html',
	styleUrls: ['./track-list.component.css'],
})
export class TrackListComponent {
	@Input() tracks: SpotifyApi.TrackObjectFull[] = [];

	artistMap(artist: SpotifyApi.ArtistObjectSimplified): string {
		return artist.name;
	}
}
