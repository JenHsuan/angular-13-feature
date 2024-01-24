import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouteType, RouteMap, TYPE_TITLE_MAP } from '../route/route.domain';
import { ThemeType } from '../theme/domain/theme.damin';
import { ThemeService } from '../theme/service/theme.service';
import { version } from '../config/constants';
import { RouteService } from '../route/service/route.service';
import { sideBarList } from './service/side-bar.domain';
import { SideBarService } from './service/side-bar.service';

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
    private themeService: ThemeService,
    private sideBarService: SideBarService
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
    this.sideBarService.changeRoute(type);
  }
  
  getRouteTitle(type: RouteType) {
    return this.sideBarService.getRouteTitle(type);
  }
}
