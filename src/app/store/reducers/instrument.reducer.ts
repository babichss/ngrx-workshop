import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { IInstrument } from '../../models/instrument.interface';


export interface State {
	instruments: IInstrument[];
}

export const initialState: State = {
	instruments: [{
		id: '1',
		periodId: '1',
		productId: '1'
	}, {
		id: '1',
		periodId: '2',
		productId: '1'
	}, {
		id: '2',
		periodId: '1',
		productId: '2'
	}, {
		id: '2',
		periodId: '2',
		productId: '2'
	}]
};

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {

		default:
			return state;
	}
}
const feature = createFeatureSelector<State>('instrument');

export const selectAllInstruments = createSelector(
	feature,
	({ instruments }) => instruments
);
