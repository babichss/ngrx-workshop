import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { IOrder } from '../../models/order.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TraderSide } from 'src/app/enum/trader-side.enum';
import { addOrder, removeOrder } from '../actions/order.actions';

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

export const reducer = createReducer(initialState,
	on(addOrder, (state, order) => adapter.addOne(order, state)),
	on(removeOrder, (state, { orderId }) => adapter.removeOne(orderId, state))
);

export const {
	selectAll: selectAllOrders
} = adapter.getSelectors(createFeatureSelector('order'));
