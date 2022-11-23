import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AvailableCultures } from './constants/culture.constants';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppInitializer {
	constructor(private translateService: TranslateService, private authService: AuthService, private accountService: AccountService) {
		// Nothing
	}

	public async initialize(): Promise<void> {
		AvailableCultures.forEach((x) => {
			this.translateService.setTranslation(
				`${x.isoCode}`,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
				require(`../../assets/i18n/${x.isoCode}.json`),
			);
		});
		const defaultCulture = AvailableCultures.find((x) => x.default === true);
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		this.translateService.setDefaultLang(defaultCulture!.isoCode);

		this.translateService.use(this.accountService.currentCultureInstant.isoCode);

		this.authService.validateSession();
	}
}
