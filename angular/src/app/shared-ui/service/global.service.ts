import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(
    private http: HttpClient,
    ) {
  }
  private subject = new Subject<any>();

  baseUrl: any = environment.baseUrl;
  public getData(): any {
    // tslint:disable-next-line: prefer-const
    let apiURL = `${this.baseUrl}users/getData`;
    console.log('apiURL============', apiURL);
    return this.http.get(apiURL);
  }

}
