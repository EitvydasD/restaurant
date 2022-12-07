import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { MenuItem } from '../../core/types/menu.types';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
	constructor(private cartService: CartService) {
		this.cartService.cartSum.subscribe({
			next: (sum) => {
				this.cartSum = sum;
			},
		});
	}

	public cart: MenuItem[] = this.cartService.currentCart;
	public cartSum: number = 0;

	public changeQuantity(menuItem: MenuItem, quantity: number): void {
		if (quantity < 0 && menuItem.quantity === 0) {
			return;
		}

		this.cartService.addToCart([{ ...menuItem, quantity: quantity }]);
	}

	public pay(): void {
		this.cartService.clearCart();
		this.cart = this.cartService.currentCart;
	}
}
