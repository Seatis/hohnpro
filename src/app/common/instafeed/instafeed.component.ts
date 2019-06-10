import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'hohn-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.css']
})
export class InstafeedComponent implements OnInit {

  @Input() feedUrl: string = '';
  @Input() targetUrl: string = 'https://www.instagram.com/';

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    
  }

  public instaURL(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
