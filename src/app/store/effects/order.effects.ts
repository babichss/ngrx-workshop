import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OrderActionTypes, TradeOrder, RemoveOrder, CreateOrder, AddOrder } from '../actions/order.actions';
import { switchMap, map } from 'rxjs/operators';
import { ITrade } from 'src/app/models/trade.interface';
import * as uuid from 'uuid';
import { AddTrade } from '../actions/trade.actions';


@Injectable()
export class OrderEffects {
	@Effect()
	ofOrderCreate$ = this.actions$.pipe(
		ofType<CreateOrder>(OrderActionTypes.CreateOrder),
		map(({ payload: { order } }) => new AddOrder({
			order: {
				id: uuid.v1(),
				...order
			}
		}))
	);

	@Effect()
	ofOrderTrade$ = this.actions$.pipe(
		ofType<TradeOrder>(OrderActionTypes.TradeOrder),
		switchMap(({ payload: { order: { id: orderId, periodId, price, productId, side, volume } } }) => {
			const trade: ITrade = {
				id: uuid.v1(),
				time: Date.now(),
				periodId, price, productId, side, volume
			};
			return [
				new RemoveOrder({ orderId }),
				new AddTrade({ trade })
			];
		})
	);


	constructor(private actions$: Actions) { }

}
