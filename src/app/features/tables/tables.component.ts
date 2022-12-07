import { Component, OnInit } from '@angular/core';
import { TableService } from '../../core/services/table.service';
import { Table } from '../../core/types/table.types';
import { clone } from '../../core/utils/general.utils';

@Component({
	selector: 'app-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
	constructor(private tableService: TableService) {
		// Nothing
	}

	public tables = clone(this.tableService.availableTables) as Table[];
	public requestedTables: Table[] = [];
	public availableTables = this.tableService.availableTables;

	public ngOnInit(): void {
		this.tableService.requestedTables.subscribe({
			next: (tables) => {
				this.requestedTables = tables;
			},
		});
	}

	public changeQuantity(table: Table, quantity: number): void {
		if (quantity < 0 && table.quantity === 0) {
			return;
		}

		if (quantity > 0 && table.quantity === table.max) {
			return;
		}
		table.quantity += quantity;
	}

	public request(): void {
		this.availableTables = this.availableTables.map((table) => {
			const requestedTable = this.tables.find((x) => x.title === table.title);
			return { ...table, max: table.max - (requestedTable?.quantity ?? 0), quantity: 0 };
		});

		this.tableService.request(this.tables);
		this.tables = this.availableTables;
		this.tableService.availableTables = this.availableTables;
	}
}
