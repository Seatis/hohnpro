import {Component, OnInit} from '@angular/core';
import {NewsletterService} from './service/newsletter.service';
import {MessageService} from 'primeng/api';
import {HohnUtil} from '../hohn.util';
import {NgModel} from '@angular/forms';

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

  public postContact(email: NgModel): void {
    console.log(email.errors);
    if (!!this.email) {
      if (email.errors) {
        this.messageService.add({severity: 'error', summary: 'Sikertelen feliratkozás!', detail: `Hibás email cím formátum! (${this.email})`});
      } else {
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

}
