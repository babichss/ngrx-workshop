import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { CreateOrder } from 'src/app/store/actions/order.actions';
import { IOrder } from 'src/app/models/order.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
		readonly store: Store<State>
	) { }

	onNewOrderSubmit(order: IOrder) {
		this.store.dispatch(new CreateOrder({ order }));
	}
}
