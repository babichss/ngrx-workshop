import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TraderSide } from '../enum/trader-side.enum';
import { IProduct } from '../models/product.interface';
import { State } from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { selectAllProducts } from '../store/reducers/product.reducer';
import { IPeriod } from '../models/period.interface';
import { selectAllPeriods } from '../store/reducers/period.reducer';
import { combineLatest } from 'rxjs';

@Component({
	selector: 'app-new-order-dialog',
	templateUrl: './new-order-dialog.component.html',
	styleUrls: ['./new-order-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOrderDialogComponent {
	readonly side = TraderSide;

	readonly productCtrl: FormControl = new FormControl();
	readonly periodCtrl: FormControl = new FormControl();
	readonly priceCtrl: FormControl = new FormControl(0, Validators.min(1));
	readonly volumeCtrl: FormControl = new FormControl(0, Validators.min(1));
	readonly sideCtrl: FormControl = new FormControl(TraderSide.Ask);

	readonly form: FormGroup = new FormGroup({
		productId: this.productCtrl,
		periodId: this.periodCtrl,
		price: this.priceCtrl,
		volume: this.volumeCtrl,
		side: this.sideCtrl
	});

	public products: IProduct[];
	public periods: IPeriod[];

	constructor(
		readonly store: Store<State>
	) {
		combineLatest(
			this.store.pipe(select(selectAllProducts)),
			this.store.pipe(select(selectAllPeriods))
		).subscribe(([products, periods]) => {
			this.products = products;
			this.periods = periods;
		});
	}
}
