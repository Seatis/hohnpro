import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AbouthohnComponent } from './abouthohn/abouthohn.component';
import { HeaderService } from './service/header.service';
import { DynamicScriptLoaderService } from './service/dynamic-script-loader.service';
import { TweetComponent } from './common/tweet/tweet.component';
import { TokenService } from './service/token.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import { InstafeedComponent } from './common/instafeed/instafeed.component';
import { CalendarComponent } from './common/calendar/calendar.component';
import {HohnMenuComponent} from './common/menu/menu.component';
import {NewsletterComponent} from './common/newsletter/newsletter.component';
import {ActionComponent} from './common/action/action.component';
import {CarouselComponent} from './common/carousel/carousel.component';
import {NewsMainComponent} from './newsmain/newsmain.component';

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
    NewsMainComponent
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
    TooltipModule
  ],
  providers: [HeaderService, DynamicScriptLoaderService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
