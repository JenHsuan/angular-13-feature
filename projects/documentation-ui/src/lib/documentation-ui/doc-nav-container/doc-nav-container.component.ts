import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-doc-nav-container',
  templateUrl: './doc-nav-container.component.html',
  styleUrls: ['./doc-nav-container.component.css']
})
export class DocNavContainerComponent{
  @Input() routeMap: Map<string, string>;
  @Input() sideBarList: string[];
  @Input() typeTitleMap: Map<string, string>;
  @Input() selectedRoute: string;
}
