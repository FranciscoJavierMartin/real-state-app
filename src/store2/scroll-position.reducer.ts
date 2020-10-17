import { StateAction } from './state-action.interface';

// Exposing the reducer's action types (so we're not passing string literals around).
export const scrollPositionActionTypes = {
  SET_SCROLL_POSITION: 'SET_SCROLL_POSITION',
};

// Basic reducer to set the scroll position value
export default function scrollPositionReducer(
  state: number = 0,
  action: StateAction
): number {
  switch (action.type) {
    case scrollPositionActionTypes.SET_SCROLL_POSITION: {
      return action.payload;
    }
    default:
      return state;
  }
}
