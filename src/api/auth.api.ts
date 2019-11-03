import request from './request.api';
import { LoginResponse } from './responses/LoginResponse';

class AuthApi {
	private readonly path = 'auth';

	async login (user: { email: string; password: string }) {
		const result = await request.post<LoginResponse>(`${this.path}/token`, user);
		return result.data;
	}
}

const instance = new AuthApi();
export default instance;
