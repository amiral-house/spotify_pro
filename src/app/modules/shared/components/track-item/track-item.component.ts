import { Component, Input } from '@angular/core';

@Component({
	selector: 'sp-track-item',
	templateUrl: './track-item.component.html',
	styleUrls: ['./track-item.component.css'],
})
export class TrackItemComponent {
	@Input() name: string = '';
	@Input() cover?: string;
	@Input() artists: string[] = [];
}
