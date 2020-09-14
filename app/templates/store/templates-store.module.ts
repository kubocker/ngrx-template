/* angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* your app */
import { feature } from './templates.state';
import { TemplateEffects } from './templates.effects';
import * as Account from './templates.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // NgRx
    StoreModule.forFeature(feature, Account.reducer),
    // EffectsModule.forFeature([TemplateEffects]),
  ],
  providers: [TemplateEffects]
})
export class TemplatesStoreModule { }
