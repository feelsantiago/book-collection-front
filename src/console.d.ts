/**
 * Prevent VS Code to auto import console on tsx files
 */
declare module 'console' {
	export = typeof import('console');
}
