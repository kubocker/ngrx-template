import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { State } from './app-state';
// import { State } from '../core/auth/store/auth.state';

/**
 * Reducers
 */
export const reducers: ActionReducerMap<State> = {};

/**
 * Logger
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('state', result);
    console.groupEnd();
    return result;
  };
}

/**
 * Meta reducer
 */
export const metaReducers: MetaReducer<State>[] = [logger];
