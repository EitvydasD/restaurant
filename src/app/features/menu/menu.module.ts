import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';

@NgModule({
	declarations: [MenuComponent],
	imports: [CommonModule, MenuRoutingModule, SharedModule, IonicModule, TranslateModule],
})
export class MenuModule {}
