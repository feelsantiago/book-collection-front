import { Route } from './routes/interfaces/route';
import Dashboard from './layouts/Dashboard';
import DashboardPage from './pages/DashboardPage';
import Auth from './pages/Auth';
import Login from './layouts/Login';
import authGuard from './guards/auth-guard';

const routes: Array<Route> = [
	{
		path: '/login',
		component: Login,
		routes: [
			{
				path: '',
				exact: true,
				component: Auth
			}
		]
	},
	{
		path: '/',
		component: Dashboard,
		redirectTo: '/login',
		guards: [ authGuard ],
		routes: [
			{
				path: '/',
				exact: true,
				component: DashboardPage
			}
		]
	}
];

export default routes;
