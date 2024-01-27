import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouteType, RouteMap, TypeTitleMap, sideBarList } from '../route/route.domain';
import { version } from '../config/constants';
import { ThemeService, ThemeType } from 'angular-documentation-ui';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.scss']
})
export class SideBarContainerComponent {
  version = version;
  title = `Notes of Angular v${version}`;
  selectedRoute = RouteType.HOME;
  
  sideBarList = sideBarList;

  themeImageMap = new Map<ThemeType, string>([
    [ThemeType.light, "../assets/image/angular-logo.png"],
    [ThemeType.dark, "../assets/image/angular-logo-dark.png"]
  ]);
  currentImage: string = "";

  constructor(
    private location: Location, 
    private router: Router,
    private themeService: ThemeService
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        let route = `/${slices[1]}`;
        this.selectedRoute = RouteMap.get(route) || RouteType.HOME;
      }
    });

    this.themeService.theme$.subscribe(themeType => {
      let url = this.themeImageMap.get(themeType);
      if (url) {
        this.currentImage = url;
      }
    });
  }

  getRouteStyle(type: RouteType) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: RouteType) {
    const path  = [...RouteMap.keys()].find(key => type === RouteMap.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: RouteType) {
    return TypeTitleMap.get(type) ? TypeTitleMap.get(type) : '';
  }
}
