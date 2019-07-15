import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { IPeriod } from 'src/app/models/period.interface';


export interface State {
	periods: IPeriod[];
}

export const initialState: State = {
	periods: [{
		id: '1',
		name: 'Jun-19'
	}, {
		id: '2',
		name: 'Jul-19'
	}, {
		id: '3',
		name: 'Aug-19'
	}]
};

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {

		default:
			return state;
	}
}

const feature = createFeatureSelector<State>('period');

export const selectAllPeriods = createSelector(
	feature,
	({ periods }) => periods
);
