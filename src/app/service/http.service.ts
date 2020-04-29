
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';

import {catchError, map} from "rxjs/internal/operators";

import {ErrorObservable} from "rxjs-compat/observable/ErrorObservable";


export abstract class HttpService {


  private header : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json','api-key': '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'});

  public constructor(
    protected http: HttpClient) {    }

  protected post<T>(path: string, body: any) : Observable<T> {
    const options : any = {
      headers: this.header,
      observe: 'response'
    };

    console.log('callService with url: ', path);
    console.log('callService with body: ', body);
    console.log('callService with options: ', options);
    let httpEvent : Observable<HttpEvent<T>> = this.http.post<T>(path, body, options);

    return this.processHttpEvent<T>(httpEvent);
  }

  protected postWithCustomHeader<T>(path: string, header: HttpHeaders, body: any) : Observable<T> {
    const options : any = {
      headers: header,
      observe: 'response'
    };

    console.log('callService with url: ', path);
    console.log('callService with body: ', body);
    console.log('callService with options: ', options);
    let httpEvent : Observable<HttpEvent<T>> = this.http.post<T>(path, body, options);

    return this.processHttpEvent<T>(httpEvent);
  }

  protected get<T>(path: string, params?: HttpParams) : Observable<T> {
    let options : any = {
      headers: this.header,
      observe: 'response',
      params: params
    };

    console.log('callService with url: ', path);
    console.log('callService with options: ', options);
    let httpEvent : Observable<HttpEvent<T>> =  this.http.get<T>(path, options);
    return this.processHttpEvent<T>(httpEvent);
  }

  protected getWithCustomHeader<T>(path: string, header: HttpHeaders, params?: HttpParams) : Observable<T> {
    let options : any = {
      headers: header,
      observe: 'response',
      params: params
    };

    console.log('callService with url: ', path);
    console.log('callService with options: ', options);
    let httpEvent : Observable<HttpEvent<T>> =  this.http.get<T>(path, options);
    return this.processHttpEvent<T>(httpEvent);
  }

  private processHttpEvent<T>(event : Observable<HttpEvent<T>>) : Observable<T> {
    return event
      .pipe(
        map((response: HttpResponse<T>) => {
          return this.responseHandler<T>(response);
        }),
        catchError((error: any) => {
          return this.errorHandler<T>(error);
        })
      );
  }

  private errorHandler<T>(error: HttpErrorResponse): ErrorObservable<T> {
    console.log('error status: ', error.status);
    return throwError(error.message);
  }

  private responseHandler<T>(response: HttpResponse<T>) : T {
    const data : T = response.body;

    console.log('response url: ', response.url);


    console.log('service call response: ', data);
    return data;
  }


}
