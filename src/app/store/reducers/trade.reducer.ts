import { ITrade } from 'src/app/models/trade.interface';
import { addTrade } from '../actions/trade.actions';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';


export interface State extends EntityState<ITrade> { }

const adapter: EntityAdapter<ITrade> = createEntityAdapter<ITrade>();
const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
	initialState,
	on(addTrade, (state, trade) => adapter.addOne(trade, state))
);

const feature = createFeatureSelector<State>('trade');

export const {
	selectAll: selectAllTrades
} = adapter.getSelectors(feature);
