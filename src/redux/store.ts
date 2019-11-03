/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-27 09:40:22
 * @modify date 2019-09-27 09:40:22
 * @desc Define stores for application
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { layoutReducer } from './layout/reducer';

const rootReducer = combineReducers({
	layout: layoutReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function initializeStore () {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}
