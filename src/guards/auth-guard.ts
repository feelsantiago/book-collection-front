import { GuardResolve } from '../routes/guard';
import authService from '../services/auth-service';

const authGuard: GuardResolve = () => {
	return authService.isAutheticated();
};

export default authGuard;
