import { Component } from '@angular/core';
import { ThemeService, ThemeType } from 'angular-documentation-ui';
import { RouteMap, TypeTitleMap, sideBarList } from './public/route/route.domain';
import { version } from './public/config/constants';
import { authorUrl, timelineUrl } from './public/config/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routeMap = RouteMap;
  sideBarList = sideBarList;
  typeTitleMap = TypeTitleMap;

  currentImage = "../assets/image/favicon-194x194.png";

  version = version;
  title = `Notes of Angular v${version}`;
  authorUrl = authorUrl;
  timelineUrl = timelineUrl;
}
