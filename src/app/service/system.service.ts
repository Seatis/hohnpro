import {Injectable} from '@angular/core';
import {News} from '../news/model/news.model';
import {newsData} from '../news/news.data';

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


}

