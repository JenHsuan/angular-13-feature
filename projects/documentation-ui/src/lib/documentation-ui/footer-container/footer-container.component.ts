import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent {
  @Input() routeMap: Map<string, string>
  @Input() sideBarList: string[];
  @Input() showNavigationButton = true;
}
