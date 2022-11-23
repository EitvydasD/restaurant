import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { SignInRequest } from '../../../core/types/auth.types';

@Component({
	selector: 'sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
	constructor(private authService: AuthService) {
		// Nothing
	}

	public form = new FormGroup({
		email: new FormControl<string>('', [Validators.required, Validators.email]),
		password: new FormControl<string>('', [Validators.required]),
	});

	public signIn(): void {
		this.authService.signIn(this.form.value as SignInRequest);
	}
}
