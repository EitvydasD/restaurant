import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'icon-button',
	templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
	@Input()
	public icon: string = '';

	@Input()
	public color: string = 'primary';

	@Input()
	public title: string = '';

	@Input()
	public disabled: boolean = false;

	@Input()
	public expand: string = 'full';

	@Output()
	public onClick: EventEmitter<void> = new EventEmitter<void>();
}
