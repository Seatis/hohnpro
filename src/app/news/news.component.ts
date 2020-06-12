import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/header.service';
import {TokenService} from '../service/token.service';
import {News} from './model/news.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {SystemService} from '../service/system.service';
import {NewsCategoryKeys} from './news.category.keys';
import {ActivatedRoute} from '@angular/router';
import {RestResponse} from '../common/model/restresponse.model';

@Component({
  selector: 'hohn-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public convertedNews: News[][] = [];
  private news: News[];
  private oneMonthOffset: number = 2674800000;
  private newsCategory: string = 'Hírek';

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService,
    private sanitizer: DomSanitizer,
    private systemService: SystemService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
    this.route.params.subscribe(
      params => {
        console.log(params['id']);
        if (params['id']) {
          this.initNews(params['id']);
          this.newsCategory = params['id'] === 'all' ? 'Hírek' : this.systemService.getNewsCategoryValue(params['id']);
        } else {
          this.initNews(NewsCategoryKeys.ALL);
        }
      }
    );
  }

  public isNewsFeatured(datum: Date): boolean {
    return new Date().getTime() - new Date(datum).getTime() < this.oneMonthOffset;
  }

  public getLocalDateString(datum: Date): string {
    return new Date(datum).toLocaleDateString();
  }

  public getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private initNews(category: string): void {
    this.convertedNews = [];
    this.systemService.getNewsAll().subscribe( (response: RestResponse<News[]>) => {
      if (!!response.data) {
        if (category === NewsCategoryKeys.ALL) {
          this.news = response.data;
        } else {
          this.news= response.data.filter( (news: News) => news.kategoria === category);
        }
        this.newsGridConverter();
      }
    });

    // this.news = category === NewsCategoryKeys.ALL
    //   ? this.systemService.getNews()
    //   : this.systemService.getNews().filter( (news: News) => news.kategoria === category);
    // this.newsGridConverter();
  }

  private newsGridConverter(): void {
    let row: News[] = [];
    this.news.sort(function(a,b){
      return new Date(b.datum).getTime() - new Date(a.datum).getTime();
    }).forEach( (item: News, index: number) => {
      row.push(item);
      if (index === 1 || (index > 2 && index % 2 === 1)) {
        this.convertedNews.push(row);
        row = [];
      } else if (this.news.length - 1 === index && index % 2 === 0) {
        this.convertedNews.push(row);
      }
    });
    console.log('CONVERTED: ', this.convertedNews);
  }

}
