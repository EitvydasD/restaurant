import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { User, UserHelpers } from '../../core/types/user.types';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	constructor(private accountService: AccountService) {
		// Nothing
	}

	public form = UserHelpers.createForm();
	public fullName = '';

	public ngOnInit(): void {
		this.accountService.currentUser.subscribe({
			next: (user) => {
				if (user) {
					this.form = UserHelpers.createForm(user);
					this.fullName = `${user.firstName} ${user.lastName}`;
				}
			},
		});
	}

	public save(): void {
		this.accountService.updateProfile(this.form.getRawValue() as User);
	}
}
