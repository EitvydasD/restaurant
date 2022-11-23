import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing';

@NgModule({
	declarations: [SettingsComponent],
	imports: [CommonModule, SettingsRoutingModule, SharedModule, IonicModule, TranslateModule],
})
export class SettingsModule {}
