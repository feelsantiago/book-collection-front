/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 10:00:35
 * @modify date 2019-08-26 10:00:35
 * @desc Create all the routes with layouts and guards
 */

import React, { FunctionComponent } from 'react';
import { Route as IRoute } from './interfaces/route';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ResolveGuards, Guards } from './guard';
import { Resolve, Reject } from '../utils/either';

/**
 * Transform main route in layout to wrapper sub-routes
 * @param route 
 */
function resolveSubRoutes (route: IRoute): Array<IRoute> {
	// if not have sub-routes
	if (!route.routes) return [ route ];

	const { component: Layout, path, guards, routes, redirectTo } = route;

	const newRoutes = routes.map<IRoute>((route) => {
		const { component: Component } = route;

		return {
			path: route.path === '/' ? path : path + (path === '/' ? '' : '/') + route.path,
			component: withLayout(Layout, Component),
			exact: route.exact,
			guards: guards && route.guards ? guards.concat(route.guards) : guards,
			redirectTo: route.redirectTo ? route.redirectTo : redirectTo
		};
	});

	return newRoutes;
}

/**
 * Verify is the guards fails or are accepted 
 * @param guardResult 
 * @param redirectTo 
 * @param Component 
 */
function resolveGuards (guardResult: Guards, Component: FunctionComponent) {
	const fromGuardResult = (result: boolean) => (result ? Resolve<any>(Component) : Reject<any>(Redirect));

	const result = guardResult.fold((status) => status);
	return fromGuardResult(result);
}

/**
 * Wrapper the sub-component in a layout (HOC)
 * @param Layout 
 * @param Component 
 */
const withLayout = (Layout: FunctionComponent, Component: FunctionComponent): FunctionComponent => {
	const wrapped: FunctionComponent = () => (
		<Layout>
			<Component />
		</Layout>
	);

	return wrapped;
};

/**
 * Define route-module props
 */
interface RouteModuleProps {
	routes: Array<IRoute>;
}

/**
 * Create the JSX.Elements for routes
 * @param param
 */
export const RoutesModule: FunctionComponent<RouteModuleProps> = ({ routes }) => {
	// extract sub-routes and flat the array
	const newRoutes = routes.reduce<Array<IRoute>>((acc, next) => acc.concat(resolveSubRoutes(next)), []);

	return (
		<div id="app-routes-module">
			<BrowserRouter>
				<Switch>
					{newRoutes.map((route, index) => {
						const { path, exact, component: Component } = route;

						// if not have guards, pass through (for reduce operation)
						const guards = route.guards ? route.guards : [ () => true ];
						const redirectTo = route.redirectTo ? route.redirectTo : '/';

						// concat all the guards in a compositional lazy loading function
						const guardResult = guards.reduce(
							(acc, next) => acc.next((status) => status && next()),
							ResolveGuards(() => true)
						);

						return (
							<Route
								path={path}
								exact={exact}
								key={index}
								render={() =>
									resolveGuards(guardResult, Component).fold(
										(Component: any) => <Component />,
										(ErrorPage: typeof Redirect) => <ErrorPage to={redirectTo} />
									)}
							/>
						);
					})}
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default RoutesModule;
