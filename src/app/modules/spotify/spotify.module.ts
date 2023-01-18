import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotifyRoutingModule } from './spotify-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SpotifyComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SpotifyRoutingModule
  ]
})
export class SpotifyModule { }
