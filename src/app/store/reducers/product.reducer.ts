import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';


export interface State {
	products: IProduct[];
}

export const initialState: State = {
	products: [{
		id: '1',
		name: 'Sugar'
	}, {
		id: '2',
		name: 'Salt'
	}]
};

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {

		default:
			return state;
	}
}

const feature = createFeatureSelector<State>('product');

export const selectAllProducts = createSelector(
	feature,
	({ products }) => products
);
