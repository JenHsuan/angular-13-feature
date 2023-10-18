import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
  ) { }

  ngAfterViewInit(): void {
    /*
    const factory: ComponentFactory<DynamicComponent> = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);
    */
    const componentRef = this.container.createComponent(DynamicComponent);
  }


}
