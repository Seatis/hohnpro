import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../../../service/http.service';

@Injectable()
export class NewsletterService extends HttpService {

  private newsletterUrl: string = 'https://api.sendinblue.com/v3/contacts';
  private newsletterHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',
    'api-key': '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'});

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getContacts(): Observable<any> {
    return this.getWithCustomHeader<any>(this.newsletterUrl, this.newsletterHeader);
  }

  public postContact(email: string): Observable<any> {
    let body: any = {'updateEnabled':false, 'email': email};
    return this.postWithCustomHeader(this.newsletterUrl, this.newsletterHeader, body);
  }

}

