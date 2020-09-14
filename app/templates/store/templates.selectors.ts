/* ngrx */
import { createFeatureSelector, createSelector } from '@ngrx/store';

/* your app */
import { State, feature } from './templates.state';


// // ------------------------------------
// control
const state = createFeatureSelector<State>(feature);
// ------------------------------------ //


//
export const getAuthor = createSelector(state, s => s.author);

//
export const getSample = createSelector(state, s => s.sample);
