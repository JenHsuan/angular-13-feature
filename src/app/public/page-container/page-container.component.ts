import { Component, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { RouteMap } from '../route/route.domain';
import { sideBarList } from '../side-bar-container/service/side-bar.domain';

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
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
