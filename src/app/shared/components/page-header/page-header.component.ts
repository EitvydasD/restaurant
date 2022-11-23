import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AvailableCultures } from '../../../core/constants/culture.constants';
import { AccountService } from '../../../core/services/account.service';
import { AuthService } from '../../../core/services/auth.service';
import { Culture } from '../../../core/types/culture.types';

@Component({
	selector: 'page-header',
	templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
	constructor(private authService: AuthService, private accountService: AccountService, private alertController: AlertController) {
		this.accountService.currentCulture.subscribe({
			next: (culture) => {
				if (culture) {
					this.culture = culture;
				}
			},
		});
	}

	@Input()
	public title: string = '';

	@Input()
	public showButton: boolean = true;

	public culture: Culture = AvailableCultures.find((x) => x.default === true) as Culture;

	public signOut(): void {
		this.authService.signOut();
	}

	public changeCulture(isoCode: string): void {
		this.accountService.changeCulture(isoCode);
	}
}
