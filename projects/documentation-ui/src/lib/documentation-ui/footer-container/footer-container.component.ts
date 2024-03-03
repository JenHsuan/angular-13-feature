import { KeyValue } from '@angular/common';
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
  @Input() externalLinkMap: Map<string, string>;

  originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
    return 0;
  }

  navigate(link: string) {
    let target = this.externalLinkMap.get(link);
    if (target) {
      window.open(target);
    }
  }
}
