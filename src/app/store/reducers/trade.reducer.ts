import { ITrade } from 'src/app/models/trade.interface';
import { TradeActionTypes, TradeActions } from '../actions/trade.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State {
	trades: ITrade[];
}

export const initialState: State = {
	trades: []
};

export function reducer(state = initialState, action: TradeActions): State {
	switch (action.type) {
		case TradeActionTypes.AddTrade:
			return { ...state, trades: [...state.trades, action.payload.trade] };
		default:
			return state;
	}
}

const feature = createFeatureSelector<State>('trade');

export const selectAllTrades = createSelector(
	feature,
	({ trades }) => trades
);

