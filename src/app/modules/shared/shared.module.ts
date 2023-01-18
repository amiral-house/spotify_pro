import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { WindowDragComponent } from './components/window-drag/window-drag.component';
import { ResizableComponent } from './components/resizable/resizable.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { IconComponent } from './components/icon/icon.component';

const declarations = [
	ButtonComponent,
	WindowDragComponent,
	ResizableComponent,
	AvatarComponent,
	IconComponent,
];

@NgModule({
	declarations: declarations,
	exports: [...declarations],
	imports: [CommonModule],
})
export class SharedModule {}
