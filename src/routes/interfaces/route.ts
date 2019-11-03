import { FunctionComponent } from 'react';
import { GuardResolve } from '../guard';

export interface Route {
	path: string;
	component: FunctionComponent;
	exact?: boolean;
	guards?: Array<GuardResolve>;
	redirectTo?: string;
	routes?: Array<Route>;
}
