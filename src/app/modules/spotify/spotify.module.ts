import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyRoutingModule } from './spotify-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LikedTracksComponent } from './pages/liked-tracks/liked-tracks.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

@NgModule({
	declarations: [
		HomeComponent,
		SpotifyComponent,
		SidebarComponent,
		UserProfileComponent,
		LikedTracksComponent,
		TrackListComponent,
		PlaylistComponent,
	],
	imports: [CommonModule, SpotifyRoutingModule, SharedModule],
})
export class SpotifyModule {}
