import { createAction, props } from '@ngrx/store';
import { ITrade } from 'src/app/models/trade.interface';

export const addTrade = createAction('[Trader] Add Trade', props<ITrade>());
