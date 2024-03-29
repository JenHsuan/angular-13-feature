import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RouteType, TypeTitleMap } from '../public/route/route.domain';
import { SectionContainerComponent, getIdFromTitle } from 'angular-documentation-ui';
import { codeMap } from '../public/config/code-map';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
  title = TypeTitleMap.get(RouteType.DYNAMIC_COMPONENT);
  getIdFromTitle = getIdFromTitle;
  codeMap = codeMap;
  sectionTitles = [
    "Introduction",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["[Angular 大師之路] Day 15 - 動態載入元件 (複雜版)", "https://ithelp.ithome.com.tw/m/articles/10206734"]
  ]);

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    const componentRef = this.container.createComponent(DynamicComponent);
    this.cd.detectChanges();
  }
}
