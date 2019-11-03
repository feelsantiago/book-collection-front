export interface LoginResponse {
	name: string;
	email: string;
	role: string;
	owner: string;
	token: string;
	auth_method: string;
	usRegion?: boolean;
}
