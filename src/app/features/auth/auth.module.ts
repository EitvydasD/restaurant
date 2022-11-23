import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

import { AuthRoutingModule } from './auth.routing';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
	declarations: [SignInComponent, SignUpComponent],
	imports: [CommonModule, AuthRoutingModule, TranslateModule, IonicModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
