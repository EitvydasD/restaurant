import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
	public form = new FormGroup({
		firstName: new FormControl('', [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		birthDate: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		phone: new FormControl('', [Validators.required]),
		address: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
		confirmPassword: new FormControl('', [Validators.required]),
	});

	public signUp(): void {
		// TODO: Implement sign up
	}
}
