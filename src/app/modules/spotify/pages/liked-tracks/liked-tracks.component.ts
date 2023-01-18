import { Component } from '@angular/core';
import { map } from 'rxjs';
import { PlaylistController } from '../../controllers/playlist.controller';

@Component({
	selector: 'sp-liked-tracks',
	templateUrl: './liked-tracks.component.html',
	styleUrls: ['./liked-tracks.component.css'],
})
export class LikedTracksComponent {
	constructor(public readonly playlistController: PlaylistController) {}

	$tracks = this.playlistController.$likedSongs.pipe(
		map((res) => res.map((item) => item.track))
	);
}
