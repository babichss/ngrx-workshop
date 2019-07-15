import { createSelector } from '@ngrx/store';
import { selectAllPeriods } from '../reducers/period.reducer';
import { selectAllProducts } from '../reducers/product.reducer';
import { selectAllOrders } from '../reducers/order.reducer';
import { selectAllInstruments } from '../reducers/instrument.reducer';
import { TraderSide } from 'src/app/enum/trader-side.enum';
import { IGridRow } from 'src/app/models/watchlist-grid-row.interface';
import { IOrder } from 'src/app/models/order.interface';
import { selectAllTrades } from '../reducers/trade.reducer';
import { ITradeGridRow } from 'src/app/models/trade-grid-row.interface';

export const getWatchGridData = createSelector(
	selectAllInstruments,
	selectAllOrders,
	selectAllProducts,
	selectAllPeriods,
	(instruments, orders, products, periods) => instruments.map<IGridRow>(instrument => {
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
	})
);

export const getTradeGridData = createSelector(
	selectAllTrades,
	selectAllProducts,
	selectAllPeriods,
	(trades, products, periods) => trades.map<ITradeGridRow>(trade => {
		const productName = products.find(({ id }) => trade.productId === id).name;
		const periodName = periods.find(({ id }) => trade.periodId === id).name;
		return {
			...trade,
			periodName,
			productName
		};
	})
);

function getOrders(instrumentOrders: IOrder[], key: string, tradeSide: TraderSide) {
	const def = new Array(3).fill(null);
	const orders = instrumentOrders.filter(({ side }) => side === tradeSide);
	return def.reduce((res, next, i) => ({ ...res, [`${key}${i}`]: orders[i] || next }), {});
}
