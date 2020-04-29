import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {News} from './model/news.model';
import {newsData} from './news.data';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {SystemService} from '../service/system.service';

@Component({
  selector: 'hohn-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public convertedNews: News[][] = [];
  private news: News[];
  private oneMonthOffset: number = 2674800000;

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService,
    private sanitizer: DomSanitizer,
    private systemService: SystemService
  ) { }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
    this.initNews();
  }

  public isNewsFeatured(datum: Date): boolean {
    return new Date().getTime() - datum.getTime() < this.oneMonthOffset;
  }

  public getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private initNews(): void {
    this. news = this.systemService.getNews();
    this.newsGridConverter();
  }

  private newsGridConverter(): void {
    let row: News[] = [];
    this.news.sort(function(a,b){
      return new Date(b.datum).getTime() - new Date(a.datum).getTime();
    }).forEach( (item: News, index: number) => {
      console.log(index);
      row.push(item);
      if (index === 1 || (index > 2 && index % 3 === 0)) {
        this.convertedNews.push(row);
        row = [];
      } else if (this.news.length - 1 === index && index % 2 === 0) {
        console.log('Ide befut');
        console.log('Index: ', index);
        console.log('Length: ', this.news.length);
        this.convertedNews.push(row);
      }
    });
  }

}
