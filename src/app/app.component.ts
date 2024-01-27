import { Component } from '@angular/core';
import { ThemeService } from 'angular-documentation-ui';
import { RouteMap, TypeTitleMap, sideBarList } from './public/route/route.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routeMap = RouteMap;
  sideBarList = sideBarList;
  typeTitleMap = TypeTitleMap;

  constructor(private themeService: ThemeService) {
    let themeType = this.themeService.getCurrentThemeType();
    this.themeService.setThemeByThemeType(themeType);
  }
}
