import { Component, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { RouteMap, sideBarList } from '../route/route.domain';
import { authorUrl } from '../config/url';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  @Input('title') title: string | undefined;
  @Input() sectionTitles: string[];
  @Input() sections: QueryList<ElementRef> | undefined;
  @Input() getIdFromTitle: Function; 
  sideBarList = sideBarList;
  routeMap = RouteMap;
  authorUrl = authorUrl;
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
