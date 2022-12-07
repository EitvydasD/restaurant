import { Component } from '@angular/core';
import { AvailableMenu } from '../../core/constants/menu.constants';
import { CartService } from '../../core/services/cart.service';
import { Menu, MenuItem } from '../../core/types/menu.types';
import { clone } from '../../core/utils/general.utils';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	constructor(private cartService: CartService) {
		// Nothing;
	}

	public menu = clone(AvailableMenu) as Menu[];

	public changeQuantity(menuItem: MenuItem, quantity: number): void {
		if (quantity < 0 && menuItem.quantity === 0) {
			return;
		}
		menuItem.quantity += quantity;
	}

	public addToCart(): void {
		const menuItems = this.menu.reduce((all, category) => all.concat(category.content), [] as MenuItem[]);

		this.cartService.addToCart(menuItems);
		this.menu = clone(AvailableMenu) as Menu[];
	}
}
