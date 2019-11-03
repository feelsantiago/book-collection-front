/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-27 09:44:59
 * @modify date 2019-09-27 09:44:59
 * @desc Define Actions to interact with layout reducer
 */

import { Layout, LayoutActionTypes, CHANGE_LAYOUT } from './types';

export function changeLayout (layout: Layout): LayoutActionTypes {
	return {
		type: CHANGE_LAYOUT,
		payload: layout
	};
}
