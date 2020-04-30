import {Injectable} from '@angular/core';
import {News} from '../news/model/news.model';
import {newsData} from '../news/news.data';
import {Event} from '../common/calendar/model/event.model';
import {Events} from '../common/calendar/events.mock';
import {supportMock} from '../common/support/support.mock';
import {Support} from '../common/support/model/support.model';

@Injectable()
export class SystemService {

  constructor() {

  }

  public getNews(): News[] {
    return newsData;
  }

  public getNewsById(id: number): News {
    return newsData.filter( (item: News) => item.id === id).length ? newsData.filter( (item: News) => item.id === id)[0] : null;
  }

  public getEvents(): Event[] {
    return Events;
  }

  public getSupports(): Support[] {
    return supportMock;
  }


}

