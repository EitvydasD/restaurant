import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing';

@NgModule({
	declarations: [CartComponent],
	imports: [CommonModule, CartRoutingModule, SharedModule, IonicModule, TranslateModule],
})
export class CartModule {}
