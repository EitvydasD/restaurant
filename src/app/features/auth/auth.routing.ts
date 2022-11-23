import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyUnauthorizedGuard } from '../../core/guards/only-unauthorized.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
	{
		path: 'sign-in',
		component: SignInComponent,
		canActivate: [OnlyUnauthorizedGuard],
	},
	{
		path: 'sign-up',
		component: SignUpComponent,
		canActivate: [OnlyUnauthorizedGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
