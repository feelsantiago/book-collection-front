/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 09:41:04
 * @modify date 2019-08-26 09:41:04
 * @desc Functional Compositional Code With Reject Handle
 */

/**
 * Define a function to be chained 
 */
interface IMap<T> {
	(value: T): T;
}

/**
 * Encapsulate the value to be chained across operations
 * @param value 
 * @returns Box-Map type object to keep compose functions
 */
export const Resolve = <T extends {}>(value: T) => ({
	map: (func: IMap<T>) => Resolve(func(value)),
	fold: (resolve: IMap<T>, reject: IMap<T>) => resolve(value)
});

/**
 * Encapsulate the value and preserve to be not modified across operations
 * @param value 
 * @returns Box-Map type object to keep compose functions without modify original value
 */
export const Reject = <T extends {}>(value: T) => ({
	map: (func: IMap<T>) => Reject(value),
	fold: (resolve: IMap<T>, reject: IMap<T>) => reject(value)
});
