import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IGridRow } from '../models/watchlist-grid-row.interface';
import { IOrder } from '../models/order.interface';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers';
import { combineLatest, Observable } from 'rxjs';
import { selectAllInstruments } from '../store/reducers/instrument.reducer';
import { selectAllOrders } from '../store/reducers/order.reducer';
import { selectAllProducts } from '../store/reducers/product.reducer';
import { selectAllPeriods } from '../store/reducers/period.reducer';
import { map } from 'rxjs/operators';
import { TraderSide } from '../enum/trader-side.enum';
import { TradeOrder } from '../store/actions/order.actions';

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

	readonly data$: Observable<IGridRow[]> = combineLatest(
		this.store.pipe(select(selectAllInstruments)),
		this.store.pipe(select(selectAllOrders)),
		this.store.pipe(select(selectAllProducts)),
		this.store.pipe(select(selectAllPeriods))
	).pipe(
		map(([instruments, orders, products, periods]) => instruments.map<IGridRow>(instrument => {
			const instrumentOrders = orders.filter(({ productId, periodId }) => (
				productId === instrument.productId &&
				periodId === instrument.periodId
			));

			const product = products.find(({ id }) => id === instrument.productId);
			const period = periods.find(({ id }) => id === instrument.periodId);

			return {
				...instrument,
				...getOrders(instrumentOrders, 'ask', TraderSide.Ask),
				...getOrders(instrumentOrders, 'bid', TraderSide.Bid),
				lastTradePrice: 0,
				productName: product.name,
				periodName: period.name
			};
		}))
	);

	constructor(
		readonly store: Store<State>
	) {
	}

	trade(order: IOrder) {
		this.store.dispatch(new TradeOrder({ order }));
	}
}

function getOrders(instrumentOrders: IOrder[], key: string, tradeSide: TraderSide) {
	const def = new Array(3).fill(null);
	const orders = instrumentOrders.filter(({ side }) => side === tradeSide);
	return def.reduce((res, next, i) => ({ ...res, [`${key}${i}`]: orders[i] || next }), {});
}
