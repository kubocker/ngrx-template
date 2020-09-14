/* ngrx */
import { createAction, props } from '@ngrx/store';


/**
 * アカウント系状態管理
 * Action
 * @enum
 */
enum AccountTypes {

    //
    SET_TEMPLATE_AUTHOR      = '[] {{ write down statement subject }}',

    //
    GET_TEMPLATE_AUTHOR      = '[] {{ write down statement subject }}',

    //
    SET_TEMPLATE_SAMPLE      = '[] {{ write down statement subject }}',

    //
    GET_TEMPLATE_SAMPLE      = '[] {{ write down statement subject }}',

}

/**
 *
 * @variable
 */
export const setTemplateAuthor = createAction(
  AccountTypes.SET_TEMPLATE_AUTHOR,
  props<{ info: string }>()
);

/**
 *
 * @variable
 */
export const getTemplateAuthor = createAction(
  AccountTypes.GET_TEMPLATE_AUTHOR,
  props()
);


/**
 *
 * @variable
 */
export const setTemplateSample = createAction(
  AccountTypes.SET_TEMPLATE_SAMPLE,
  props<{ info: string }>()
);

/**
 *
 * @variable
 */
export const getTemplateSample = createAction(
  AccountTypes.GET_TEMPLATE_SAMPLE,
  props()
);

