import { Component, OnInit } from '@angular/core';
import {HohnMenu} from './model/menu.model';

@Component({
  selector: 'hohn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class HohnMenuComponent implements OnInit {

  public menuItems: HohnMenu[] = hohnMenu;
  constructor() { }

  public ngOnInit(): void {

  }
}

export const hohnMenu: HohnMenu[] = [
  {label: 'Főoldal', url: '/', items: null},
  {label: 'Hírek', url: '/', items: [
      {label: 'Archívum', url: '/'}
    ]},
  {label: 'Céljaim', url: '/', items: [
      {label: 'Agrárium', url: '', items: null},
      {label: 'Egészségügy', url: '', items: null},
      {label: 'Oktatás', url: '', items: null},
      {label: 'Családpolitika', url: '', items: null},
      {label: 'Önkormányzat', url: '', items: null},
    ]},
  {label: 'Események', url: '/', items: [
      {label: 'Eseménynaptár', url: '/', items: null}
    ]},
  {label: 'Média', url: '/', items: [
      {label: 'Sajtómegjelenés', url: '/', items: null},
      {label: 'Galéria', url: '/', items: null}
    ]},
  {label: 'Elérhetőségek', url: '/', items: null}
];

export const hohnMenuOld: HohnMenu[] = [
  {label: 'Home', url: '/', items: [
      {label: 'Home Layouts', url: '/', items: [
          {label: 'Candidate Layout 1', url: '/', items: null},
          {label: 'Candidate Layout 2', url: '/about', items: null},
          {label: 'Party Layout 1', url: '/', items: null},
          {label: 'Party Layout 2', url: '/', items: null}
        ]},
      {label: 'Header Layouts', url: '/', items: null},
      {label: 'Footer Layouts', url: '/', items: null}
    ]},
  {label: 'Pages', url: '/', items: [
      {label: 'About Us', url: '/', items: [
          {label: 'Meet Adam', url: '/', items: null},
          {label: 'Meet Linda', url: '/', items: null},
          {label: 'Our Party', url: '/', items: null}
        ]},
      {label: 'Issues', url: '/', items: null},
      {label: 'Endorsements', url: '/', items: null},
      {label: 'Get Involved', url: '/', items: null},
      {label: 'Landing Page', url: '/', items: null},
      {label: 'Contact', url: '/', items: null},
      {label: '404 Page', url: '/', items: null},
      {label: 'Coming Soon Page', url: '/', items: null}
    ]},
  {label: 'Events', url: '/', items: [
      {label: 'Events List With Map', url: '/', items: null},
      {label: 'Events By Month', url: '/', items: null},
      {label: 'Events Masonry', url: '/', items: null},
      {label: 'Single Event Post', url: '/', items: null}
    ]},
  {label: 'Media', url: '/', items: [
      {label: 'Sortable Grid  Portfolio', url: '/', items: [
          {label: '2 Columns With Description', url: '/', items: null},
          {label: '3 Columns', url: '/', items: null},
          {label: '4 Columns Full Width', url: '/', items: null}
        ]},
      {label: 'Grid Gallery', url: '/', items: null},
      {label: 'Flickr Gallery', url: '/', items: null},
      {label: 'Instagram Gallery', url: '/', items: null}
    ]},
  {label: 'Features', url: '/', items: [
      {label: 'Shortcodes', url: '/', items: null},
      {label: 'Typography', url: '/', items: null},
      {label: 'Columns', url: '/', items: null},
      {label: 'RTL Version', url: '/', items: null}
    ]},
  {label: 'News', url: '/', items: [
      {label: 'News With Sidebar', url: '', items: null},
      {label: 'News - 2 Columns', url: '', items: null},
      {label: 'Single Blog Post', url: '', items: null},
    ]},
  {label: 'Shop', url: '/', items: null}
];