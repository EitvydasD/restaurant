import { Component } from '@angular/core';
import { AvailableTables } from '../../core/constants/table.contstants';
import { Table } from '../../core/types/table.types';

@Component({
	selector: 'app-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
	public tables = AvailableTables;

	public changeQuantity(table: Table, quantity: number): void {
		if (quantity < 0 && table.quantity === 0) {
			return;
		}
		table.quantity += quantity;
	}
}
