import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../types/menu.types';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private cart: MenuItem[] = [];

	public get currentCart(): MenuItem[] {
		return this.cart;
	}

	public cartSumSubject = new BehaviorSubject<number>(0);

	public get cartSum(): Observable<number> {
		return this.cartSumSubject.asObservable();
	}

	public addToCart(menuItems: MenuItem[]): void {
		menuItems.forEach((menuItem) => {
			const item = this.cart.find((x) => x.title === menuItem.title);
			if (item) {
				item.quantity += menuItem.quantity;
			} else if (menuItem.quantity > 0) {
				this.cart.push(menuItem);
			}
		});

		this.cartSumSubject.next(this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
	}

	public clearCart(): void {
		this.cart = [];
		this.cartSumSubject.next(0);
	}
}
