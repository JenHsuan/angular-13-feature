import { Injectable } from '@angular/core';
import { RouteService } from '../../route/service/route.service';
import { RouteType } from '../../route/route.domain';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor(
    private routeService: RouteService
  ) { }

  changeRoute(type: RouteType) {
    this.routeService.changeRoute(type);
  }
  
  getRouteTitle(type: RouteType) {
    return this.routeService.getRouteTitle(type);
  }
}
