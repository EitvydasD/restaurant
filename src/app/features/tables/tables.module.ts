import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables.routing';

@NgModule({
	declarations: [TablesComponent],
	imports: [CommonModule, TablesRoutingModule, SharedModule, IonicModule, TranslateModule],
})
export class TablesModule {}
