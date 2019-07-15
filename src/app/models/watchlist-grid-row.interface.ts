import { IInstrument } from './instrument.interface';
import { IOrder } from './order.interface';

export interface IGridRow extends IInstrument {
	productName: string;
	periodName: string;
	lastTradePrice: number;
	ask0: IOrder;
	ask1: IOrder;
	ask2: IOrder;
	bid0: IOrder;
	bid1: IOrder;
	bid2: IOrder;
}
