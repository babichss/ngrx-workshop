import { Action, createFeatureSelector, createReducer } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';


export interface State extends EntityState<IProduct> { }

const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: State = adapter.addMany([
	{ id: '1', name: 'Sugar' },
	{ id: '2', name: 'Salt' }
],
	adapter.getInitialState()
);

export const reducer = createReducer(initialState);

const feature = createFeatureSelector<State>('product');

export const {
	selectAll: selectAllProducts
} = adapter.getSelectors(feature);
