import { Component, Input } from '@angular/core';

@Component({
	selector: 'sp-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.css'],
})
export class IconComponent {
	@Input() name: string = '';
	@Input() size: number = 24;
}
