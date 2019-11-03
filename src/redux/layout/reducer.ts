import { LayoutState, LayoutActionTypes, CHANGE_LAYOUT } from './types';

const initialState: LayoutState = {
	state: { background: true }
};

export function layoutReducer (state = initialState, action: LayoutActionTypes): LayoutState {
	switch (action.type) {
		case CHANGE_LAYOUT:
			return { state: action.payload };
		default:
			return state;
	}
}
