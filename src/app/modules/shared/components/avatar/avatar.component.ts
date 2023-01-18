import { Component, Input } from '@angular/core';

@Component({
	selector: 'sp-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
	@Input() source?: string = '';
	@Input() description?: string = '';
	@Input() size = 32;
}
