import { Injectable } from '@angular/core';
import { ROUTE_MAP, RouteType, TYPE_TITLE_MAP } from '../route.domain';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(
    private router: Router,
  ) {
  }
  
  changeRoute(type: RouteType) {
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: RouteType) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
