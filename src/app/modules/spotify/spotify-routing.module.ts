import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LikedTracksComponent } from './pages/liked-tracks/liked-tracks.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SpotifyComponent } from './pages/spotify/spotify.component';

const routes: Routes = [
	{
		path: '',
		component: SpotifyComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: HomeComponent,
			},
			{
				path: 'liked-tracks',
				pathMatch: 'full',
				component: LikedTracksComponent,
			},
			{
				path: 'playlist/:id',
				pathMatch: 'full',
				component: PlaylistComponent,
			},
			{
				path: '**',
				redirectTo: '/',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SpotifyRoutingModule {}
