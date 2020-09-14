/* angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* app */
import { reducers, metaReducers } from './app-reducers';
import { environment as env } from 'environments/environment';

/* your store modules */
import { TemplatesStoreModule } from '../templates/store/templates-store.module';
import { AuthStoreModule } from '../examples/auth/store/auth-store.module';
import { TodosStoreModule } from '../examples/todos/store/todos-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // template
    TemplatesStoreModule,

    // -----------------------------------------------
    // examples
    // -----------------------------------------------
    // auth
    // AuthStoreModule,

    // todos
    // TodosStoreModule,


    // app
    // set store
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule { }
