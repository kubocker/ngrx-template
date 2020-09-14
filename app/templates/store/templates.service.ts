/* angular */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* ngrx */
import { Store, select } from '@ngrx/store';

/* your app */
import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TemplatesService {


  domain = env.api.url;

  /**
   */
  constructor(private http: HttpClient) {
  }


  /**
   * 
   */
  getAuthorName() {
    const url = `${this.domain}author`
    return this.http.get(url, { responseType: 'text' });
  }


  /**
   * 
   */
  getSampleTitle() {
    const url = `${this.domain}sample`
    return this.http.get(url, { responseType: 'text' });
  }




}
