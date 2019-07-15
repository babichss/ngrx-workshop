import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOrder } from '../../models/order.interface';
import { OrderActionTypes, OrderActions } from '../actions/order.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TraderSide } from 'src/app/enum/trader-side.enum';

export interface State extends EntityState<IOrder> { }

const adapter: EntityAdapter<IOrder> = createEntityAdapter<IOrder>();
const initialState: State = adapter.addMany([{
	id: '1',
	periodId: '1',
	productId: '1',
	price: 100,
	volume: 2000,
	side: TraderSide.Ask
}, {
	id: '2',
	periodId: '1',
	productId: '2',
	price: 10,
	volume: 1000,
	side: TraderSide.Bid
}], adapter.getInitialState({}));

export function reducer(state = initialState, action: OrderActions): State {
	switch (action.type) {
		case OrderActionTypes.AddOrder:
			return adapter.addOne(action.payload.order, state);
		case OrderActionTypes.RemoveOrder:
			return adapter.removeOne(action.payload.orderId, state);
		default:
			return state;
	}
}

export const {
	selectAll: selectAllOrders
} = adapter.getSelectors(createFeatureSelector('order'));
