import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AvailableTables } from '../constants/table.contstants';
import { Table } from '../types/table.types';

@Injectable({
	providedIn: 'root',
})
export class TableService {
	private requestedTablesSubject = new BehaviorSubject<Table[]>([]);

	public get requestedTables(): Observable<Table[]> {
		return this.requestedTablesSubject.asObservable();
	}

	public availableTables = AvailableTables;

	public request(tables: Table[]): void {
		const requestedTables = this.requestedTablesSubject.value;

		tables.forEach((table) => {
			const item = requestedTables.find((x) => x.title === table.title);
			if (item) {
				item.quantity += table.quantity;
			} else if (table.quantity > 0) {
				requestedTables.push(table);
			}
		});

		this.requestedTablesSubject.next(requestedTables.filter((x) => x.quantity > 0));
	}
}
