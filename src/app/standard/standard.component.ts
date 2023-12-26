import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DYNAMIC_COMPONENT);
  escapeHtml = escapeHtml;
  
  legacyCode = `
  import { DynamicComponent } from './dynamic/dynamic.component';

  export class StandardComponent {
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
    constructor(private cfr: ComponentFactoryResolver ) { }
  
    ngAfterViewInit(): void {
      const factory: ComponentFactory<DynamicComponent> = this.cfr.resolveComponentFactory(DynamicComponent);
      const componentRef = this.container.createComponent(factory);
    }
  }
  `;

  newCode = `
  import { DynamicComponent } from './dynamic/dynamic.component';
  
  export class StandardComponent {
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
    ngAfterViewInit(): void {
       const componentRef = this.container.createComponent(DynamicComponent);
    }
  }
  `;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor() { }

  ngAfterViewInit(): void {
    /*
    legacy snippets:

    const factory: ComponentFactory<DynamicComponent> = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);
    */

    //Angular 13:
    const componentRef = this.container.createComponent(DynamicComponent);
  }


}
