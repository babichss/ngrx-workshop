import { createAction, props } from '@ngrx/store';
import { IOrder } from '../../models/order.interface';

export const createOrder = createAction('[Order] Create Order', props<IOrder>());
export const addOrder = createAction('[Order] Add Order', props<IOrder>());
export const tradeOrder = createAction('[Order] Trade Order', props<IOrder>());
export const removeOrder = createAction('[Order] Remove Order', props<{ orderId: string }>());
