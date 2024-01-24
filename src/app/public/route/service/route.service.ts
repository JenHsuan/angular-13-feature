import { Injectable } from '@angular/core';
import { RouteMap, RouteType, TYPE_TITLE_MAP } from '../route.domain';
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
    const path  = [...RouteMap.keys()].find(key => type === RouteMap.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: RouteType) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
