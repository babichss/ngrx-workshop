import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IGridRow } from '../models/watchlist-grid-row.interface';
import { IOrder } from '../models/order.interface';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers';
import { Observable } from 'rxjs';
import { TradeOrder } from '../store/actions/order.actions';
import { getWatchGridData } from '../store/selectors/selectors';

@Component({
	selector: 'app-watchlist-grid',
	templateUrl: './watchlist-grid.component.html',
	styleUrls: ['./watchlist-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
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

	readonly data$: Observable<IGridRow[]> = this.store.pipe(
		select(getWatchGridData)
	);

	constructor(
		readonly store: Store<State>
	) { }

	trade(order: IOrder) {
		this.store.dispatch(new TradeOrder({ order }));
	}
}


