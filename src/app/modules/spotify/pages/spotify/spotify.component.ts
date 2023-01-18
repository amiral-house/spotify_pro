import { Component, OnInit } from '@angular/core';
import { PlaylistController } from '../../controllers/playlist.controller';

@Component({
	selector: 'sp-spotify',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css'],
})
export class SpotifyComponent implements OnInit {
	constructor(private readonly playlistController: PlaylistController) {}

	ngOnInit(): void {
		this.playlistController.getLikedSongs();
	}
}
