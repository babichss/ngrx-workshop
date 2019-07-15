import { TraderSide } from '../enum/trader-side.enum';

export interface ITrade {
	id: string;
	time: number;
	productId: string;
	periodId: string;
	price: number;
	volume: number;
	side: TraderSide;
}
