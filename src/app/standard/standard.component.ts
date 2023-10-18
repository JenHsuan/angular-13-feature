import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements AfterViewInit {
  instruction = `
  npx @angular/cli@13 new Angular13Project
  `;
  
  code = `
  //legacy syntax:

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver ) { }

  ngAfterViewInit(): void {
    const factory: ComponentFactory<DynamicComponent> = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);
  }

  //new syntax:

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  ngAfterViewInit(): void {
     const componentRef = this.container.createComponent(DynamicComponent);
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
