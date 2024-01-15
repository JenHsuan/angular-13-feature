import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ROUTE_MAP, ROUTE_TYPE, TYPE_TITLE_MAP, sideBarList } from '../route/route.domain';
import { RouteService } from '../route/service/route.service';

@Component({
  selector: 'app-mobile-nav-container',
  templateUrl: './mobile-nav-container.component.html',
  styleUrls: ['./mobile-nav-container.component.scss']
})
export class MobileNavContainerComponent {
  icon = faBars;
  sideBarList = sideBarList;
  @ViewChild("links", {read: ElementRef}) links: ElementRef | undefined; 

  constructor(
    private routeService: RouteService
  ) {
  }

  changeRoute(type: ROUTE_TYPE) {
    this.routeService.changeRoute(type);
    this.links?.nativeElement.classList.remove("active");
  }
  
  getRouteTitle(type: ROUTE_TYPE) {
    return this.routeService.getRouteTitle(type);
  }

  toggleNavigation($event: Event) {
    $event.preventDefault();
    if (this.links?.nativeElement.classList.contains("active")) {
      this.links?.nativeElement.classList.remove("active");
    } else {
      this.links?.nativeElement.classList.add("active");
    }
  }
}
