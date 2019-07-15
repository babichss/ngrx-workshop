import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store/reducers';
import { selectAllTrades } from '../store/reducers/trade.reducer';
import { combineLatest, Observable } from 'rxjs';
import { selectAllProducts } from '../store/reducers/product.reducer';
import { selectAllPeriods } from '../store/reducers/period.reducer';
import { ITradeGridRow } from '../models/trade-grid-row.interface';
import { TraderSide } from '../enum/trader-side.enum';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-trades-grid',
	templateUrl: './trades-grid.component.html',
	styleUrls: ['./trades-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradesGridComponent {
	readonly columnIds = ['time', 'product', 'price', 'volume'];

	public side = TraderSide;

	readonly data$: Observable<ITradeGridRow[]> = combineLatest(
		this.store.pipe(select(selectAllTrades)),
		this.store.pipe(select(selectAllProducts)),
		this.store.pipe(select(selectAllPeriods))
	).pipe(
		map(([trades, products, periods]) => trades.map<ITradeGridRow>(trade => {
			const productName = products.find(({ id }) => trade.productId === id).name;
			const periodName = periods.find(({ id }) => trade.periodId === id).name;
			return {
				...trade,
				periodName,
				productName
			};
		}))
	);;

	constructor(
		readonly store: Store<State>
	) { }
}
