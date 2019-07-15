import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromInstrument from './instrument.reducer';
import * as fromOrder from './order.reducer';
import * as fromProduct from './product.reducer';
import * as fromPeriod from './period.reducer';
import * as fromTrade from './trade.reducer';

export interface State {
	instrument: fromInstrument.State;
	order: fromOrder.State;
	product: fromProduct.State;
	period: fromPeriod.State;
	trade: fromTrade.State;
}

export const reducers: ActionReducerMap<State> = {
	instrument: fromInstrument.reducer,
	order: fromOrder.reducer,
	product: fromProduct.reducer,
	period: fromPeriod.reducer,
	trade: fromTrade.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
