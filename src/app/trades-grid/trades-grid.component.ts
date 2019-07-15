import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TraderSide } from '../enum/trader-side.enum';
import { ITrade } from '../models/trade.interface';

@Component({
	selector: 'app-trades-grid',
	templateUrl: './trades-grid.component.html',
	styleUrls: ['./trades-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradesGridComponent {
	@Input() data: ITrade[] = [];
	readonly columnIds = ['time', 'product', 'price', 'volume'];
	public side = TraderSide;
}
