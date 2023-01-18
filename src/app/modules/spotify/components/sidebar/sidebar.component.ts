import { Component } from '@angular/core';
import { SpotifyUserController } from '../../controllers/user.controller';

@Component({
	selector: 'sp-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
	constructor(public readonly spotifyUserController: SpotifyUserController) {}

	menu = [
		{
			icon: 'home',
			label: 'Главная',
			url: '/',
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
