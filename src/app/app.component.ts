import { Component, OnInit } from '@angular/core';
import { RouteMap, TypeTitleMap, sideBarList } from './public/route/route.domain';
import { version } from './public/config/constants';
import { authorUrl, timelineUrl } from './public/config/url';
import { environment } from 'src/environments/environment';
import { updateGoogleAnalyticsId } from 'angular-documentation-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routeMap = RouteMap;
  sideBarList = sideBarList;
  typeTitleMap = TypeTitleMap;

  currentImage = "../assets/image/favicon-194x194.png";

  version = version;
  title = `Notes of Angular v${version}`;
  authorUrl = authorUrl;
  timelineUrl = timelineUrl;

  linkMap = new Map<string, string>([
    ["angular-doc-ui", "https://www.npmjs.com/package/angular-documentation-ui?activeTab=readme"],
    ["Learning Map", timelineUrl],
    ["Jen-hsuan Hsieh (Sean) © 2024 - 2034", authorUrl]
  ]);

  ngOnInit(): void {
    updateGoogleAnalyticsId(environment.googleAnalyticsId);
  }
}
