/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 09:55:04
 * @modify date 2019-08-26 09:55:04
 * @desc Define compositional guards with lazy loading resolve
 */

/**
 * Define a function that is used as guards for routes
 */
 interface INextGuard {
	(result: boolean): boolean;
}

/**
 * Defines the initial state of a chain of guards
 */
export interface GuardResolve {
	(): boolean;
}

/**
 * Encapsulate guards operations in a lazy loading Box-Map compositional function
 * @param element 
 */
export const ResolveGuards = (element: GuardResolve) => ({
	next: (guard: INextGuard) => ResolveGuards(() => guard(element())),
	fold: (resolve: INextGuard) => resolve(element())
});

export type Guards = ReturnType<typeof ResolveGuards>;