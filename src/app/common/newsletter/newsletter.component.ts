import {Component, OnInit} from '@angular/core';
import {NewsletterService} from './service/newsletter.service';
import {MessageService} from 'primeng/api';
import {HohnUtil} from '../hohn.util';

@Component({
  selector: 'hohn-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public email: string;
  public parlamentEloUrl: string = HohnUtil.getParlamentEloUrl();
  constructor(private newsletterService: NewsletterService, private messageService: MessageService) { }

  public ngOnInit(): void {
    // this.newsletterService.getContacts().subscribe(x=> {
    //   console.log(x);
    // });
  }

  public postContact(): void {
    if (!!this.email) {
      this.newsletterService.postContact(this.email).subscribe(response => {
        if (!!response && !!response.id) {
          this.messageService.add({severity: 'info', summary: 'Sikeres feliratkozás!', detail: this.email});
          this.email = '';
        } else {
          this.messageService.add({severity: 'error', summary: 'Sikertelen feliratkozás!', detail: 'Kérem ellenőrizze a beírt e-mail címet!'});
        }
      });
    }
  }

}
