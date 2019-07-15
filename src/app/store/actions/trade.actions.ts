import { Action } from '@ngrx/store';
import { ITrade } from 'src/app/models/trade.interface';

export enum TradeActionTypes {
	AddTrade = '[Trade] Add Trade',


}

export class AddTrade implements Action {
	readonly type = TradeActionTypes.AddTrade;
	constructor(readonly payload: { trade: ITrade }) { }
}


export type TradeActions = AddTrade;
