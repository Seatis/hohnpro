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


}

