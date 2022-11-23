import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnlyAuthorizedGuard } from './core/guards/only-authorized.guard';
import { OnlyUnauthorizedGuard } from './core/guards/only-unauthorized.guard';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { UnauthorizedLayoutComponent } from './layouts/unauthorized/unauthorized-layout.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		canActivate: [OnlyAuthorizedGuard],
		children: [
			{
				path: 'tables',
				loadChildren: () => import('./features/tables/tables.module').then((m) => m.TablesModule),
				canLoad: [OnlyAuthorizedGuard],
			},
			{
				path: 'menu',
				loadChildren: () => import('./features/menu/menu.module').then((m) => m.MenuModule),
				canLoad: [OnlyAuthorizedGuard],
			},
			{
				path: 'cart',
				loadChildren: () => import('./features/cart/cart.module').then((m) => m.CartModule),
				canLoad: [OnlyAuthorizedGuard],
			},
			{
				path: 'settings',
				loadChildren: () => import('./features/settings/settings.module').then((m) => m.SettingsModule),
				canLoad: [OnlyAuthorizedGuard],
			},
			{
				path: 'profile',
				loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule),
				canLoad: [OnlyAuthorizedGuard],
			},
		],
	},
	{
		path: '',
		component: UnauthorizedLayoutComponent,
		canActivate: [OnlyUnauthorizedGuard],
		loadChildren: () => import('./features/auth/auth.module').then((x) => x.AuthModule),
		canLoad: [OnlyUnauthorizedGuard],
	},
	{
		path: '**',
		redirectTo: '/menu',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
