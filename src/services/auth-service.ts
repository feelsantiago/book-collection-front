/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-02 11:26:38
 * @modify date 2019-09-02 11:26:38
 * @desc Get and Set auth information to local storage
 */

import { User } from '../models/user';

class AuthService {
	private readonly token_key = 'TOKEN-KEY';
	private readonly user_key = 'USER-KEY';

	private token: string = '';
	private user: User | undefined = undefined;

	setAuthentication (token: string, user: User, remember: boolean = false) {
		if (remember) {
			localStorage.setItem(this.token_key, token);
			localStorage.setItem(this.user_key, JSON.stringify(user));
		}

		this.token = token;
		this.user = user;
	}

	isAutheticated (): boolean {
		if (this.token || localStorage.getItem(this.token_key)) return true;

		return false;
	}

	getToken (): string | null {
		if (this.token) return this.token;

		return localStorage.getItem(this.token_key);
	}

	getUser (): User | undefined {
		if (this.user) return this.user;

		const user = localStorage.getItem(this.user_key);
		if (!user) return undefined;

		return JSON.parse(user);
	}

	logout () {
		localStorage.clear();
	}
}

const authService = new AuthService();
export default authService;
