import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { IInstrument } from '../../models/instrument.interface';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';


export interface State extends EntityState<IInstrument> { }

const adapter: EntityAdapter<IInstrument> = createEntityAdapter<IInstrument>();

export const initialState: State = adapter.addMany([{
	id: '1',
	periodId: '1',
	productId: '1'
}, {
	id: '2',
	periodId: '2',
	productId: '1'
}, {
	id: '3',
	periodId: '1',
	productId: '2'
}, {
	id: '4',
	periodId: '2',
	productId: '2'
}],
	adapter.getInitialState()
);

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {
		default:
			return state;
	}
}
const feature = createFeatureSelector<State>('instrument');

export const {
	selectAll: selectAllInstruments
} = adapter.getSelectors(feature);
