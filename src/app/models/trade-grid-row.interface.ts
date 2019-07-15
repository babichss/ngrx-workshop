import { ITrade } from './trade.interface';

export interface ITradeGridRow extends ITrade {
	productName: string;
	periodName: string;
}
