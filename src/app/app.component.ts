import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { CreateOrder, TradeOrder } from 'src/app/store/actions/order.actions';
import { IOrder } from 'src/app/models/order.interface';
import { getWatchGridData, getTradeGridData } from './store/selectors/selectors';
import { Observable } from 'rxjs';
import { IGridRow } from './models/watchlist-grid-row.interface';
import { ITradeGridRow } from './models/trade-grid-row.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	readonly watchListData$: Observable<IGridRow[]> = this.store.pipe(
		select(getWatchGridData)
	);

	readonly tradeGridData$: Observable<ITradeGridRow[]> = this.store.pipe(
		select(getTradeGridData)
	);

	constructor(
		readonly store: Store<State>
	) { }

	onNewOrderSubmit(order: IOrder) {
		this.store.dispatch(new CreateOrder({ order }));
	}

	onTrade(order: IOrder) {
		this.store.dispatch(new TradeOrder({ order }));
	}
}
