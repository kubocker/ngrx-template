/* angular */
import { Injectable } from '@angular/core';

/* ngrx */
import { Store, select } from '@ngrx/store';

/* your app */
import { TemplatesService } from './store/templates.service';
import { State } from './store/templates.state';
import * as TemplateSelectors from './store/templates.selectors';
import * as TemplateActions from './store/templates.actions';


@Injectable({
  providedIn: 'root'
})
export class TemplatesFacade {


  /**
   *
   */
  author$ = this.store.pipe(select(TemplateSelectors.getAuthor));


  /**
   *
   */
  sample$ = this.store.pipe(select(TemplateSelectors.getSample));



  /**
   * @param store Store
   */
  constructor(
    private store: Store<State>,
    private service: TemplatesService,
  ) {

    //
    this.service.getAuthorName().subscribe(name => {
      this.setUserAuthor(name);
    })

    //
    this.service.getSampleTitle().subscribe(title => {
      this.setUserSample(title);
    })

  }


  /**
   */
  setUserAuthor(name: string) {
    this.store.dispatch(TemplateActions.setTemplateAuthor({ info: name }));
  }


  /**
   */
  setUserSample(title: string) {
    this.store.dispatch(TemplateActions.setTemplateSample({ info: title }));
  }


}
