import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing.module';


import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AbouthohnComponent} from './abouthohn/abouthohn.component';
import {HeaderService} from './service/header.service';
import {DynamicScriptLoaderService} from './service/dynamic-script-loader.service';
import {TweetComponent} from './common/tweet/tweet.component';
import {TokenService} from './service/token.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {InstafeedComponent} from './common/instafeed/instafeed.component';
import {CalendarComponent} from './common/calendar/calendar.component';
import {HohnMenuComponent} from './common/menu/menu.component';
import {NewsletterComponent} from './common/newsletter/newsletter.component';
import {ActionComponent} from './common/action/action.component';
import {CarouselComponent} from './common/carousel/carousel.component';
import {NewsMainComponent} from './newsmain/newsmain.component';
import {NewsComponent} from './news/news.component';
import {SystemService} from './service/system.service';
import {NewsletterService} from './common/newsletter/service/newsletter.service';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {NewsitemComponent} from './news/newsitem/newsitem.component';
import {EventComponent} from './event/event.component';
import {EventfeedComponent} from './common/eventfeed/eventfeed.component';
import {SupportComponent} from './common/support/support.component';
import {ContactComponent} from './contact/contact.component';
import {FacebookComponent} from './common/facebook/facebook.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {StopvecseyComponent} from './stopvecsey/stopvecsey.component';
import {CheckboxModule} from 'primeng/checkbox';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import {environment} from '../environments/environment';

// Beállítás:
// https://tinesoft.github.io/ngx-cookieconsent/home
// https://github.com/tinesoft/ngx-cookieconsent

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  position: 'bottom-left',
  theme: 'block',
  palette: {
    popup: {
      background: '#0d2f5d',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#af0c39',
      text: '#ffffff',
      border: 'transparent'
    }
  },
  content: {
    message: 'Ez a weboldal a felhasználói élmény javítása, valamint a zavartalan működés biztosítása érdekében sütiket (cookie-kat) használ.',
    dismiss: 'Megértettem',
    deny: 'Refuse cookies',
    link: 'Adatvédelmi tájékoztató',
    //link: 'További információk',
    href: 'assets/pdf/hohn_adatvedelmi_tajekoztato_2021.pdf',
    //href: 'https://lehetmas.hu/suti-cookie-szabalyzat/',
    policy: 'Adatkezelés'
  },
  type: 'info'
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AbouthohnComponent,
    TweetComponent,
    InstafeedComponent,
    CalendarComponent,
    HohnMenuComponent,
    NewsletterComponent,
    ActionComponent,
    CarouselComponent,
    NewsMainComponent,
    NewsComponent,
    NewsitemComponent,
    EventComponent,
    EventfeedComponent,
    SupportComponent,
    ContactComponent,
    FacebookComponent,
    StopvecseyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    DropdownModule,
    TooltipModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    CheckboxModule,
    NgcCookieConsentModule.forRoot(cookieConfig)

  ],
  providers: [HeaderService, DynamicScriptLoaderService, TokenService, SystemService, NewsletterService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
