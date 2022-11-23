import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
	declarations: [PageHeaderComponent, IconButtonComponent],
	imports: [CommonModule, IonicModule, TranslateModule],
	exports: [PageHeaderComponent, IconButtonComponent],
})
export class SharedModule {}
