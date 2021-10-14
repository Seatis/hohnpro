import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import {IndexComponent} from './index/index.component'
import { AbouthohnComponent } from './abouthohn/abouthohn.component';
import {NewsComponent} from './news/news.component';
import {NewsitemComponent} from './news/newsitem/newsitem.component';
import {EventComponent} from './event/event.component';
import {ContactComponent} from './contact/contact.component';
import {StopvecseyComponent} from './stopvecsey/stopvecsey.component';

const APP_ROUTING : Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: OrderscreenComponent},
  {path: '', component: IndexComponent},
  {path: 'about', component: AbouthohnComponent, runGuardsAndResolvers: 'always'},
  {path: 'news/:id', component: NewsComponent, runGuardsAndResolvers: 'always'},
  {path: 'content/:id', component: NewsitemComponent, runGuardsAndResolvers: 'always'},
  {path: 'event', component: EventComponent, runGuardsAndResolvers: 'always'},
  {path: 'contact', component: ContactComponent, runGuardsAndResolvers: 'always'},
  {path: 'stopvecsey', component: StopvecseyComponent, runGuardsAndResolvers: 'always'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING, {onSameUrlNavigation: 'reload', anchorScrolling: 'enabled'}),
    RouterModule.forChild(APP_ROUTING),
    FormsModule,
    CommonModule]
  ,
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
})
export class AppRoutingModule { }
