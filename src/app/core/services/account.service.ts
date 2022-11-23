import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AvailableCultures } from '../constants/culture.constants';
import { Culture } from '../types/culture.types';
import { User } from '../types/user.types';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	constructor(private translateService: TranslateService) {
		// Nothing
	}

	private readonly CultureToken = '_culture';

	private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
	private currentCultureSubject: BehaviorSubject<Culture> = new BehaviorSubject<Culture>(this.prepareCurrentCulture());

	public get currentUser(): Observable<User | null> {
		return this.currentUserSubject.asObservable();
	}

	public get currentCulture(): Observable<Culture> {
		return this.currentCultureSubject.asObservable();
	}

	public get currentCultureInstant(): Culture {
		return this.currentCultureSubject.value;
	}

	public setCurrentUser(user: User | null): void {
		this.currentUserSubject.next(user);
	}

	public changeCulture(isoCode: string): void {
		this.translateService.use(isoCode);
		localStorage.setItem(this.CultureToken, isoCode);
		this.currentCultureSubject.next(AvailableCultures.find((x) => x.isoCode === isoCode) as Culture);
	}

	private prepareCurrentCulture(): Culture {
		const culture = localStorage.getItem(this.CultureToken);
		let current = AvailableCultures.find((x) => x.default === true) as Culture;
		if (culture) {
			current = AvailableCultures.find((x) => x.isoCode === culture) as Culture;
		}

		return current;
	}

	public updateProfile(user: User): void {
		const current = this.currentUserSubject.value;

		if (!current) {
			return;
		}

		this.setCurrentUser({ ...user, id: current.id });
	}
}
