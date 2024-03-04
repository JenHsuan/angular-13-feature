import { Component, Input, OnInit } from '@angular/core';
import { originalOrder } from '../../../utils/utils';
@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent {
  @Input() routeMap: Map<string, string>
  @Input() sideBarList: string[];
  @Input() showNavigationButton = true;
  @Input() externalLinkMap: Map<string, string>;

  originalOrder = originalOrder;

  navigate(link: string) {
    let target = this.externalLinkMap.get(link);
    if (target) {
      window.open(target);
    }
  }
}
