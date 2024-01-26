import { Component, Input, OnInit } from '@angular/core';
import { authorUrl } from '../config/url';
import { RouteMap } from '../route/route.domain';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent {
  authorUrl = authorUrl;

  //routeMap = RouteMap;
  @Input() routeMap: Map<string, string>
  @Input() sideBarList: string[];
}
