import { createFeatureSelector, createReducer } from '@ngrx/store';
import { IPeriod } from 'src/app/models/period.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface State extends EntityState<IPeriod> { }

const adapter: EntityAdapter<IPeriod> = createEntityAdapter<IPeriod>();

export const initialState: State = adapter.addMany([
	{ id: '1', name: 'Jun-19' },
	{ id: '2', name: 'Jul-19' },
	{ id: '3', name: 'Aug-19' }],
	adapter.getInitialState()
);

export const reducer = createReducer(initialState);

const feature = createFeatureSelector<State>('period');

export const {
	selectAll: selectAllPeriods
} = adapter.getSelectors(feature);
