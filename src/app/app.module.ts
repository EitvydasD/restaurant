import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitializer } from './core/app.initializer';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { UnauthorizedLayoutComponent } from './layouts/unauthorized/unauthorized-layout.component';

function initApp(initializer: AppInitializer) {
	return () => initializer.initialize();
}

@NgModule({
	declarations: [AppComponent, MainLayoutComponent, UnauthorizedLayoutComponent],
	imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), TranslateModule.forRoot()],
	providers: [
		AppInitializer,
		{
			provide: APP_INITIALIZER,
			useFactory: initApp,
			deps: [AppInitializer],
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
