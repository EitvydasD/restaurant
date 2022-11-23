import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(private authService: AuthService) {
		this.authService.isAuthenticated.subscribe({
			next: (isAuthenticated) => {
				this.isAuthenticated = isAuthenticated;
			},
		});
	}

	public isAuthenticated: boolean = false;

	public title = 'Restaurant';
}
