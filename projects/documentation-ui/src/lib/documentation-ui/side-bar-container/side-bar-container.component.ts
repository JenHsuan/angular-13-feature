import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.scss']
})
export class SideBarContainerComponent {
  @Input() routeMap: Map<string, string>;
  @Input() sideBarList: string[];
  @Input() typeTitleMap: Map<string, string>;
  @Input() selectedRoute: string;
  @Input() showThemeButton = true;

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        let route = `/${slices[1]}`;
        this.selectedRoute = this.routeMap.get(route) || 'HOME';
      }
    });
  }

  getRouteStyle(type: string) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: string) {
    const path  = [...this.routeMap.keys()].find(key => type === this.routeMap.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: string) {
    return this.typeTitleMap.get(type) ? this.typeTitleMap.get(type) : '';
  }
}
