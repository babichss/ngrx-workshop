import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';

import { AppComponent } from './app.component';
import { GridComponent } from './watchlist-grid/watchlist-grid.component';
import { DialogComponent } from './dialog/dialog.component';
import { NewOrderDialogComponent } from './new-order-dialog/new-order-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { TradesGridComponent } from './trades-grid/trades-grid.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrderEffects } from './store/effects/order.effects';

@NgModule({
	declarations: [
		AppComponent,
		GridComponent,
		DialogComponent,
		NewOrderDialogComponent,
		TradesGridComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		ReactiveFormsModule,
		CdkTableModule,
		MatTableModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatIconModule,
		MatDialogModule,
		MatSelectModule,
		MatInputModule,
		MatTabsModule,
		MatBadgeModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([OrderEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: false,
			features: {
				pause: false,
				lock: true,
				persist: true
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [NewOrderDialogComponent]
})
export class AppModule { }
