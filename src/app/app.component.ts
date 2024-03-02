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

  currentImage: string = "";

  version = version;
  title = `Notes of Angular v${version}`;
  authorUrl = authorUrl;
  timelineUrl = timelineUrl;
  
  themeImageMap = new Map<ThemeType, string>([
    [ThemeType.light, "../assets/image/angular-logo.png"],
    [ThemeType.dark, "../assets/image/angular-logo-dark.png"]
  ]);
  
  constructor(private themeService: ThemeService) {
    let themeType = this.themeService.getCurrentThemeType();
    this.themeService.setThemeByThemeType(themeType);

    this.themeService.theme$.subscribe(themeType => {
      let url = this.themeImageMap.get(themeType);
      if (url) {
        this.currentImage = url;
      }
    });
  }
}
