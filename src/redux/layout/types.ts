/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-09-27 09:41:53
 * @modify date 2019-09-27 09:41:53
 * @desc Define the types for redux layout 
 */

export interface Layout {
	background: boolean;
}

export interface LayoutState {
	state: Layout;
}

export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';

interface ChangeLayoutAction {
	type: typeof CHANGE_LAYOUT;
	payload: Layout;
}

export type LayoutActionTypes = ChangeLayoutAction;
