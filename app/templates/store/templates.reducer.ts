/* ngrx */
import { Action, createReducer, on } from '@ngrx/store';

/* your app */
import * as Actions from './templates.actions';
import { State, initialState } from './templates.state';



const templateReducer = createReducer(

  // init state
  initialState,

  //
  on(Actions.setTemplateAuthor, (state, { info }) => {
    return {

      ...state,

      author: info,
    };
  }),

  //
  on(Actions.getTemplateAuthor, (state) => {
    return {

      ...state,

    };
  }),


  //
  on(Actions.setTemplateSample, (state, { info }) => {
    return {

      ...state,

      sample: info,
    };
  }),

  //
  on(Actions.getTemplateSample, (state) => {
    return {

      ...state,

    };
  }),


/**
 * Reducer
 * @param state  状態
 * @param action アクション
 */
export function reducer(state: State, action: Action) {
  return templateReducer(state, action);
}

