import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {News} from '../news/model/news.model';
import {SystemService} from '../service/system.service';
import {HohnUtil} from '../common/hohn.util';
import {RestResponse} from '../common/model/restresponse.model';
import {NewsCategoryKeys} from '../news/news.category.keys';

@Component({
  selector: 'hohn-newsmain',
  templateUrl: './newsmain.component.html',
  styleUrls: ['./newsmain.component.css']
})
export class NewsMainComponent implements OnInit {

  public feedUrl: string = HohnUtil.getInstaUrl();
  public news1: News;
  public news2: News;
  public videoUrl: string = 'https://www.youtube.com/embed/MR0mREbEpMY';

  constructor(public sanitizer: DomSanitizer, private systemService: SystemService) {

  }

  public ngOnInit(): void {
    // this.systemService.getNewsByID(11).subscribe( (response: RestResponse<News>) => {
    //   if (response.data) {
    //     console.log(response.data);
    //   }
    // });
    this.initNews();
  }

  public instaURL(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private initNews(): void {
    let news: News[];
    this.systemService.getNewsAll().subscribe( (response: RestResponse<News[]>) => {
      if (!!response.data) {
        news = response.data;
        news.sort(function(a,b){
          return new Date(b.datum).getTime() - new Date(a.datum).getTime();
        });
        this.news1 = news[0];
        this.news2 = news[1];
        this.getLastVideoUrl(news);
      }
    });

    // let news: News[] = this.systemService.getNews();
    // news.sort(function(a,b){
    //   return new Date(b.datum).getTime() - new Date(a.datum).getTime();
    // });
    // this.news1 = news[0];
    // this.news2 = news[1];
    // this.getLastVideoUrl(news);
  }

  public getLocalDateString(datum: Date): string {
    return new Date(datum).toLocaleDateString();
  }

  private getLastVideoUrl(news: News[]): void {
    news.some((item: News) => {
      if (!!item.videoUrl) {
        this.videoUrl = item.videoUrl;
        return true;
      }
    });
  }

}
