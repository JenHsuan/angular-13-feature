import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav-container',
  templateUrl: './mobile-nav-container.component.html',
  styleUrls: ['./mobile-nav-container.component.scss']
})
export class MobileNavContainerComponent {
  icon = faBars;
  @Input() routeMap: Map<string, string>;
  @Input() sideBarList: string[];
  @Input() typeTitleMap: Map<string, string>;
  @ViewChild("links", {read: ElementRef}) links: ElementRef | undefined; 

  constructor(
    private router: Router,
  ) {
  }

  changeRoute(type: string) {
    const path  = [...this.routeMap.keys()].find(key => type === this.routeMap.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
    this.links?.nativeElement.classList.remove("active");
  }

  getRouteTitle(type: string) {
    return this.typeTitleMap.get(type) ? this.typeTitleMap.get(type) : '';
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
