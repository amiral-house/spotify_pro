import { Component, Input } from '@angular/core';

@Component({
	selector: 'sp-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
	@Input() user?: SpotifyApi.CurrentUsersProfileResponse | null;

	get avatar() {
		return this.user?.images?.[0].url;
	}
}
