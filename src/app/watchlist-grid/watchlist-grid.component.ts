import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IGridRow } from '../models/watchlist-grid-row.interface';
import { IOrder } from '../models/order.interface';

@Component({
	selector: 'app-watchlist-grid',
	templateUrl: './watchlist-grid.component.html',
	styleUrls: ['./watchlist-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
	@Input() data: IGridRow[] = [];
	@Output() trade: EventEmitter<IOrder> = new EventEmitter();

	readonly columnIds = [
		'product',
		'ask2',
		'ask1',
		'ask0',
		'lastTradePrice',
		'bid0',
		'bid1',
		'bid2'
	];
}


