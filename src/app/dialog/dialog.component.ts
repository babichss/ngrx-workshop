import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewOrderDialogComponent } from '../new-order-dialog/new-order-dialog.component';
import { IOrder } from '../models/order.interface';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
	@Output() onsubmit: EventEmitter<IOrder> = new EventEmitter();

	constructor(
		readonly dialog: MatDialog
	) { }

	openDialog() {
		const dialogRef = this.dialog.open(NewOrderDialogComponent, {
			width: '480px'
		});

		dialogRef.afterClosed().subscribe((data: IOrder) => this.onDialogClose(data));
	}

	onDialogClose(data: IOrder) {
		this.onsubmit.emit(data);
	}
}
