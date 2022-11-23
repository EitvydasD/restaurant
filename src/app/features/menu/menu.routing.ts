import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyAuthorizedGuard } from '../../core/guards/only-authorized.guard';
import { MenuComponent } from './menu.component';

const routes: Routes = [
	{
		path: '',
		component: MenuComponent,
		canActivate: [OnlyAuthorizedGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuRoutingModule {}
