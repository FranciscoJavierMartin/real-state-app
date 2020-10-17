import { StateAction } from './state-action.interface';

// Exposing the reducer's action types (so we're not passing string literals around).
export const isExpandedActionTypes = {
    EXPAND: 'EXPAND',
    COLLAPSE: 'COLLAPSE'
}

// Basic reducer to set a boolean state for expand/collapse.
export function isExpandedReducer(state: boolean = false, action: StateAction): boolean {
    switch(action.type) {
        case isExpandedActionTypes.EXPAND: {
            return true;
        }
        case isExpandedActionTypes.COLLAPSE: {
            return false
        }
        default:
            return state;
    }
}