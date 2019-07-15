import { ITrade } from 'src/app/models/trade.interface';
import { TradeActionTypes, TradeActions } from '../actions/trade.actions';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';


export interface State extends EntityState<ITrade> { }

const adapter: EntityAdapter<ITrade> = createEntityAdapter<ITrade>();
const initialState: State = adapter.getInitialState();

export function reducer(state = initialState, action: TradeActions): State {
	switch (action.type) {
		case TradeActionTypes.AddTrade:
			return adapter.addOne(action.payload.trade, state);
		default:
			return state;
	}
}

const feature = createFeatureSelector<State>('trade');
export const {
	selectAll: selectAllTrades
} = adapter.getSelectors(feature);
