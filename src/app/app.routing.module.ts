import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import {IndexComponent} from './index/index.component'
import { AbouthohnComponent } from './abouthohn/abouthohn.component';
import {NewsComponent} from './news/news.component';

const APP_ROUTING : Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: OrderscreenComponent},
  {path: '', component: IndexComponent},
  {path: 'about', component: AbouthohnComponent, runGuardsAndResolvers: 'always'},
  {path: 'news', component: NewsComponent, runGuardsAndResolvers: 'always'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING, {onSameUrlNavigation: 'reload'}),
    RouterModule.forChild(APP_ROUTING),
    FormsModule,
    CommonModule]
  ,
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
})
export class AppRoutingModule { }
