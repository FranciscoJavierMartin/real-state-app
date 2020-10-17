import { ApplicationState } from './application-state.interface';
import { StateAction } from './state-action.interface';

import { isExpandedReducer } from './is-expanded.reducer';
import { userModeReducer } from './user-mode.reducer';
import scrollPositionReducer from './scroll-position.reducer';

// A root-level reducer to capture all dispatched actions within the application
export default function rootReducer(
  state: ApplicationState,
  action: StateAction
): ApplicationState {
  const { isExpanded, userMode, scrollPosition } = state;

  return {
    isExpanded: isExpandedReducer(isExpanded, action),
    userMode: userModeReducer(userMode, action),
    scrollPosition: scrollPositionReducer(scrollPosition, action),
  };
}
