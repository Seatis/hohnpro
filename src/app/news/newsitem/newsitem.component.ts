import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../service/header.service';
import {TokenService} from '../../service/token.service';
import {News} from '../model/news.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {SystemService} from '../../service/system.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../../common/calendar/model/event.model';
import {Events} from '../../common/calendar/events.mock';
import {HohnUtil} from '../../common/hohn.util';

@Component({
  selector: 'hohn-news',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {

  private news: News;
  private newsList: News[] = [];
  public events: Event[] = Events;

  public nextNews: News = null;
  public previousNews: News = null;

  constructor(
    private headerService: HeaderService,
    public tokenService: TokenService,
    private sanitizer: DomSanitizer,
    private systemService: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.tokenService.setToken();
    this.headerService.setHeaderStyle('style-2');
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.news = this.systemService.getNewsById(Number(params['id']));
          this.initNews(Number(params['id']));
        }
      }
    );
  }

  public getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public initNews(id: number): void {
    this.newsList = this.systemService.getNews();
    this.nextNews = this.systemService.getNewsById(id + 1);
    this.previousNews = this.systemService.getNewsById(id - 1);
  }

  public navigate(id: number): void {
    this.router.navigate([`/content/${id}`]);
  }

}
