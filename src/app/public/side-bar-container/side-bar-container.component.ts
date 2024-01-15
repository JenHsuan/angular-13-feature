import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTE_TYPE, ROUTE_MAP, TYPE_TITLE_MAP, sideBarList } from '../route/route.domain';
import { ThemeType } from '../theme/domain/theme.damin';
import { ThemeService } from '../theme/service/theme.service';
import { version } from '../config/constants';
import { RouteService } from '../route/service/route.service';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.scss']
})
export class SideBarContainerComponent {
  version = version;
  title = `Notes of Angular v${version}`;
  selectedRoute = ROUTE_TYPE.HOME;
  
  sideBarList = sideBarList;

  themeImageMap = new Map<ThemeType, string>([
    [ThemeType.light, "../assets/image/angular-logo.png"],
    [ThemeType.dark, "../assets/image/angular-logo-dark.png"]
  ]);
  currentImage: string = "";

  constructor(
    private location: Location, 
    private router: Router,
    private themeService: ThemeService,
    private routeService: RouteService
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        let route = `/${slices[1]}`;
        this.selectedRoute = ROUTE_MAP.get(route) || ROUTE_TYPE.HOME;
      }
    });

    this.themeService.theme$.subscribe(themeType => {
      let url = this.themeImageMap.get(themeType);
      if (url) {
        this.currentImage = url;
      }
    });
  }

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: ROUTE_TYPE) {
    this.routeService.changeRoute(type);
  }
  
  getRouteTitle(type: ROUTE_TYPE) {
    return this.routeService.getRouteTitle(type);
  }
}
