import {Injectable} from '@angular/core';
import {News} from '../news/model/news.model';
import {newsData} from '../news/news.data';
import {Event} from '../common/calendar/model/event.model';
import {Events} from '../common/calendar/events.mock';
import {supportMock} from '../common/support/support.mock';
import {Support} from '../common/support/model/support.model';
import {NewsCategoryKeys} from '../news/news.category.keys';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class SystemService {

  private newsCategoryMap: Map<string, string> = new Map();
  private serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) {
    this.newsCategoryMap.set(NewsCategoryKeys.EGYEB_HIR, 'Egyéb hír');
    this.newsCategoryMap.set(NewsCategoryKeys.PARLAMENTI_FELSZOLALAS, 'Parlamenti felszólalás');
    this.newsCategoryMap.set(NewsCategoryKeys.SAJTOTAJEKOZTATO, 'Sajtótájékoztató');
    this.newsCategoryMap.set(NewsCategoryKeys.MEDIA, 'Média');
  }

  // public getNews(): News[] {
  //   return newsData;
  // }

  public getNewsAll() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get(this.serverUrl + 'getnewsall.php', httpOptions);
  }

  public getNewsByID(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      params: {
        id: id.toString()
      }
    };
    return this.http.get(this.serverUrl + 'getnews.php', httpOptions);
  }

  // public getNewsById(id: number): News {
  //   return newsData.filter( (item: News) => item.id === id).length ? newsData.filter( (item: News) => item.id === id)[0] : null;
  // }

  public getEvents(): Event[] {
    return Events;
  }

  public getSupports(): Support[] {
    return supportMock;
  }

  public getNewsCategoryValue(key: string): string {
    return this.newsCategoryMap.get(key);
  }

}

