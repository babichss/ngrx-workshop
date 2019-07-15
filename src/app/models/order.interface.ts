import { TraderSide } from 'src/app/enum/trader-side.enum';

export interface IOrder {
	id?: string;
	instrumentId?: string;
	productId: string;
	periodId: string;
	price: number;
	volume: number;
	side: TraderSide;
}
