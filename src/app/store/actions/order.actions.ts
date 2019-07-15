import { Action } from '@ngrx/store';
import { IOrder } from '../../models/order.interface';

export enum OrderActionTypes {
	CreateOrder = '[Order] Create Order',
	AddOrder = '[Order] Add Order',
	TradeOrder = '[Order] Trade Order',
	RemoveOrder = '[Order] Remove Order',

}

export class CreateOrder implements Action {
	readonly type = OrderActionTypes.CreateOrder;
	constructor(readonly payload: { order: IOrder }) { }
}

export class AddOrder implements Action {
	readonly type = OrderActionTypes.AddOrder;
	constructor(readonly payload: { order: IOrder }) { }
}

export class TradeOrder implements Action {
	readonly type = OrderActionTypes.TradeOrder;
	constructor(readonly payload: { order: IOrder }) { }
}

export class RemoveOrder implements Action {
	readonly type = OrderActionTypes.RemoveOrder;
	constructor(readonly payload: { orderId: string }) { }
}


export type OrderActions = AddOrder
	| TradeOrder
	| RemoveOrder;
