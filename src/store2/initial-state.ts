import { ApplicationState } from './application-state.interface';

// The default state for the application.
export const initialState: ApplicationState = {
    isExpanded: false,
    userMode: 'default',
    scrollPosition: 0
}