import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DYNAMIC_COMPONENT);
  sectionTitles = [
    "Introduction",
    "Demo",
    "Reference"
  ];
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    const componentRef = this.container.createComponent(DynamicComponent);
    this.cd.detectChanges();
  }
  
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
}
