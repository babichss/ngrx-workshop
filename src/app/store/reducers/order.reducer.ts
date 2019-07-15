import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { IOrder } from '../../models/order.interface';
import { TraderSide } from '../../enum/trader-side.enum';
import { OrderActionTypes, OrderActions } from '../actions/order.actions';


export interface State {
	orders: IOrder[];
}

export const initialState: State = {
	orders: [{
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
	}]
};

export function reducer(state = initialState, action: OrderActions): State {
	switch (action.type) {
		case OrderActionTypes.AddOrder:
			return { ...state, orders: [...state.orders, action.payload.order] };
		case OrderActionTypes.RemoveOrder:
			return { ...state, orders: state.orders.filter(({ id }) => id !== action.payload.orderId) };
		default:
			return state;
	}
}

const feature = createFeatureSelector<State>('order');

export const selectAllOrders = createSelector(
	feature,
	({ orders }) => orders
);
