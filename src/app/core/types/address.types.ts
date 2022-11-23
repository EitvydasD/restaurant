import { FormControl, FormGroup, Validators } from '@angular/forms';

export type Address = {
	country: string;
	street: string;
	city: string;
	state: string;
	zip: string;
};

export class AddressHelpers {
	public static createForm(address: Address): FormGroup {
		return new FormGroup({
			country: new FormControl(address.country, [Validators.required]),
			street: new FormControl(address.street, [Validators.required]),
			city: new FormControl(address.city, [Validators.required]),
			state: new FormControl(address.state, [Validators.required]),
			zip: new FormControl(address.zip, [Validators.required]),
		});
	}

	public static formatAddress(address: Address): string {
		const parts = [address.street, address.city, address.state, address.zip, address.country];

		return parts.filter(Boolean).join(', ');
	}
}
