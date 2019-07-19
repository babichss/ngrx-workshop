import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { ITrade } from 'src/app/models/trade.interface';
import * as uuid from 'uuid';
import { addTrade } from '../actions/trade.actions';
import { createOrder, addOrder, tradeOrder, removeOrder } from '../actions/order.actions';


@Injectable()
export class OrderEffects {
	ofOrderCreate$ = createEffect(() => this.actions$.pipe(
		ofType(createOrder),
		map(order => addOrder({
			id: uuid.v1(),
			...order
		}))
	));

	ofOrderTrade$ = createEffect(() => this.actions$.pipe(
		ofType(tradeOrder),
		map(({ periodId, price, productId, side, volume, id }) => ({
			orderId: id,
			trade: {
				periodId, price, productId, side, volume,
				id: uuid.v1(),
				time: Date.now()
			}
		})),
		switchMap(({ trade, orderId }) => [
			removeOrder({ orderId }),
			addTrade(trade)
		])
	));


	constructor(private actions$: Actions) { }

}
