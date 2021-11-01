import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

// declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private ccService: NgcCookieConsentService) { }

  public ngOnInit(): void {
    // this.router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .map(() => this.activatedRoute)
    //   .subscribe((event) => {
        // console.log('HELLO')
        // $.getScript('assets/js/jquery.modernizr.js');
        // $.getScript('assets/js/jquery-2.2.4.min.js');
        // $.getScript('assets/js/jquery-ui.min.js');
        // $.getScript('assets/js/retina.min.js');
        // $.getScript('assets/js/instafeed.min.js');
        // $.getScript('assets/js/jquery.tweet.js');
        // $.getScript('assets/js/jquery.queryloader2.min.js');
        // $.getScript('assets/js/jquery.fancybox.min.js');
        // $.getScript('assets/js/owl.carousel.min.js');
        // $.getScript('assets/js/bootstrap.js');
        // $.getScript('assets/js/plugins.js');
        // $.getScript('assets/js/script.js');
        // $.getScript('assets/js/lightwidget.js');
      // });
  }
}
