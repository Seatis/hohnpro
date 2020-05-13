import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {News} from '../news/model/news.model';
import {SystemService} from '../service/system.service';
import {HohnUtil} from '../common/hohn.util';

@Component({
  selector: 'hohn-newsmain',
  templateUrl: './newsmain.component.html',
  styleUrls: ['./newsmain.component.css']
})
export class NewsMainComponent implements OnInit {

  public feedUrl: string = HohnUtil.getInstaUrl();
  public news1: News;
  public news2: News;
  public videoUrl: SafeUrl = 'https://www.youtube.com/embed/MR0mREbEpMY';

  constructor(private sanitizer: DomSanitizer, private systemService: SystemService) {

  }

  public ngOnInit(): void {
    this.initNews();
  }

  public instaURL(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private initNews(): void {
    let news: News[] = this.systemService.getNews();
    news.sort(function(a,b){
      return new Date(b.datum).getTime() - new Date(a.datum).getTime();
    });
    this.news1 = news[0];
    this.news2 = news[1];
    this.getLastVideoUrl(news);
  }

  private getLastVideoUrl(news: News[]): void {
    news.some((item: News) => {
      if (!!item.videoUrl) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.videoUrl);
        return true;
      }
    });
  }

}
