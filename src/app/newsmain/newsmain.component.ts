import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'hohn-newsmain',
  templateUrl: './newsmain.component.html',
  styleUrls: ['./newsmain.component.css']
})
export class NewsMainComponent implements OnInit {

    public feedUrl: string = '//lightwidget.com/widgets/6883079ffee25ee2bdd46884b3fe7096.html';

  constructor(private sanitizer: DomSanitizer) {

  }

  public ngOnInit(): void {

  }

  public instaURL(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



}
