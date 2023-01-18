import { Component } from '@angular/core';
import { PlaylistController } from '../../controllers/playlist.controller';
import { SpotifyUserController } from '../../controllers/user.controller';

@Component({
	selector: 'sp-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
	constructor(
		public readonly spotifyUserController: SpotifyUserController,
		public readonly playlistsController: PlaylistController
	) {}

	menu = [
		{
			icon: 'home',
			label: 'Главная',
			url: '/app',
		},
		{
			icon: 'search',
			label: 'Поиск',
			url: '/app/search',
		},
		{
			icon: 'playlist',
			label: 'Моя медиатека',
			url: '/app/songs',
		},
	];
}
