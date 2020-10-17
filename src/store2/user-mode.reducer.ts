import { StateAction } from './state-action.interface';

// Exposing the reducer's action types (so we're not passing string literals around).
export const userModeActionTypes = {
    SET_USER_MODE: 'SET_USER_MODE'
}

// Basic reducer to set a string literal user mode
export function userModeReducer(state: string = 'default', action: StateAction): string {
    switch(action.type) {
        case userModeActionTypes.SET_USER_MODE: {
            return action.payload;
        }
        default:
            return state;
    }
}