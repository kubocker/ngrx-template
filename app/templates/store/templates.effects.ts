/* angular */
import { Injectable } from '@angular/core';
import { } from 'rxjs';
import { } from 'rxjs/operators';

/* ngrx */
import { Actions, ofType, createEffect } from '@ngrx/effects';

/* your app */
import * as TemplateActions from './templates.actions';


@Injectable()
export class TemplateEffects {

  /**
   *
   * @type
   */
  updateAuthor = createEffect(() => this.actions$.pipe(

      // statement
      ofType(TemplateActions.setTemplateAuthor),

      // business logic
      // concatMapMap(({ idToken, params }) => {
      //   return this.profile$.updateUserProfile(idToken, params)
      //     .then(res => AccountsActions.setAccountProfile({ info: res }))
      // });
    )
  );


  /**
   *
   * @type
   */
  updateSample = createEffect(() => this.actions$.pipe(

      // statement 
      ofType(TemplateActions.setTemplateSample),

      // business logic

    )
  );



  constructor(
    private actions$: Actions,
  ) {}

}

