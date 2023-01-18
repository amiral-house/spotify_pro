import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpotifyAuthInterceptor } from './modules/spotify/interceptors/spotify-auth.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule],
	bootstrap: [AppComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SpotifyAuthInterceptor,
			multi: true,
		},
	],
})
export class AppModule {}
