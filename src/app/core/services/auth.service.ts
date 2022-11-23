import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignInRequest } from '../types/auth.types';
import { User } from '../types/user.types';
import { decodeBase64, encodeBase64 } from '../utils/base64.utils';
import { AccountService } from './account.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private router: Router, private accountService: AccountService) {
		// Nothing
	}

	public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

	public get isAuthenticated(): Observable<boolean> {
		return this.isAuthenticatedSubject.asObservable();
	}

	public get isAuthenticatedInstant(): boolean {
		return this.isAuthenticatedSubject.value;
	}

	private readonly TokenStorage: string = 'auth-token';
	private readonly UserIdStorage: string = 'user-id';
	private readonly LoginPage: string = '/sign-in';
	private readonly DefaultPage: string = '/menu';
	private readonly TokenValidInMinutes: number = 60;

	private readonly authorizedUsers: (User & { password: string })[] = [
		// Random users
		{
			id: 'user1',
			firstName: 'John',
			lastName: 'Doe',
			birthDate: new Date('1990-01-01'),
			email: 'admin@adm',
			phone: '+123456789',
			password: 'admin',
			address: '123 Main St',
		},
		{
			id: 'user2',
			firstName: 'Jane',
			lastName: 'Doe',
			birthDate: new Date('1990-01-01'),
			email: 'jane@adm',
			phone: '+123456789',
			password: 'jane',
			address: '123 Main St',
		},
		{
			id: 'user3',
			firstName: 'Jack',
			lastName: 'Doe',
			birthDate: new Date('1990-01-01'),
			email: 'jack@adm',
			phone: '+123456789',
			password: 'jack',
			address: '123 Main St',
		},
	];

	public signIn(request: SignInRequest): void {
		const user = this.authorizedUsers.find((x) => x.email === request.email && x.password === request.password);

		if (!user) {
			return;
		}

		this.isAuthenticatedSubject.next(true);
		this.accountService.setCurrentUser(user);

		const date = new Date();
		localStorage.setItem(this.TokenStorage, encodeBase64(date.toISOString()));
		localStorage.setItem(this.UserIdStorage, user.id);

		this.router.navigate([this.DefaultPage]);
	}

	public signOut(): void {
		this.isAuthenticatedSubject.next(false);
		this.accountService.setCurrentUser(null);

		localStorage.removeItem(this.TokenStorage);
		localStorage.removeItem(this.UserIdStorage);

		this.router.navigate([this.LoginPage]);
	}

	public validateSession(): void {
		const token = this.getToken();
		if (!token) {
			return;
		}
		const currentDate = new Date();

		const tokenDate = new Date(decodeBase64(token));
		tokenDate.setMinutes(tokenDate.getMinutes() + this.TokenValidInMinutes);

		if (currentDate.getTime() < tokenDate.getTime()) {
			this.isAuthenticatedSubject.next(true);
			this.router.navigate([this.DefaultPage]);
			const user = this.authorizedUsers.find((x) => x.id === localStorage.getItem(this.UserIdStorage));
			if (user) {
				this.accountService.setCurrentUser(user);
			}

			return;
		}

		this.isAuthenticatedSubject.next(false);
		this.router.navigate([this.LoginPage]);
	}

	private getToken(): string | null {
		return localStorage.getItem(this.TokenStorage);
	}
}
