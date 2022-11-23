import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';

@NgModule({
	declarations: [ProfileComponent],
	imports: [CommonModule, ProfileRoutingModule, IonicModule, ReactiveFormsModule, TranslateModule, SharedModule],
})
export class ProfileModule {}
