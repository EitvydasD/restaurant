import { FormControl, FormGroup, Validators } from '@angular/forms';

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	birthDate: Date;
	email: string;
	phone: string;
	address: string;
};

export class UserHelpers {
	public static createForm(user?: User): FormGroup {
		return new FormGroup({
			firstName: new FormControl({ value: user?.firstName ?? '', disabled: true }, [Validators.required]),
			lastName: new FormControl({ value: user?.lastName ?? '', disabled: true }, [Validators.required]),
			birthDate: new FormControl({ value: UserHelpers.formatBirthDate(user?.birthDate ?? new Date()), disabled: true }, [
				Validators.required,
			]),
			email: new FormControl({ value: user?.email ?? '', disabled: false }, [Validators.required, Validators.email]),
			phone: new FormControl({ value: user?.phone ?? '', disabled: false }, [Validators.required]),
			address: new FormControl({ value: user?.address ?? '', disabled: false }, [Validators.required]),
		});
	}

	private static formatBirthDate(birthDate: Date): string {
		const date = new Date(birthDate);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	}
}
