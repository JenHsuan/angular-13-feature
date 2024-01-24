import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent, getIdFromTitle } from 'angular-documentation-ui';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(RouteType.NOTES);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Introduction to Angular Package Format (APF)",
    "Create, Pack, and Install an Angular Library Manually and Publish it on NPM",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["[Angular] 使用AngularCli搭配ng-packagr建立元件", "https://jiaming0708.github.io/2018/06/13/angular-cli-packagr/"],
    ["Create an angular library and publish it on Npm", "https://medium.com/@zeeshankhan8838/create-an-angular-library-and-publish-it-on-npm-9352345a088"],
    ["kagr打包+npm publish流程", "https://blog.csdn.net/ztnhnr/article/details/88293600"],
    ["Angular 包格式", "https://angular.cn/guide/angular-package-format"],
    ["Angular Package Format 简介", "https://blog.poi.cat/post/introduce-angular-package-format"],
    ["How to use ESM on the web and in Node.js", "https://byteofdev.com/posts/how-to-use-esm/"],
    ["This class is visible to consumers via SomeModule -> SomeComponent, but is not exported from the top-level library entrypoint", "https://stackoverflow.com/questions/60121962/this-class-is-visible-to-consumers-via-somemodule-somecomponent-but-is-not-e"],
    ["npm依赖管理peerDependencies", "https://juejin.cn/post/7081801514208985124"],
    ["Building a Library in Angular 11 with Dependencies", "https://medium.com/@yamini.hrishikesh/building-a-library-in-angular-11-with-dependencies-2d34db752220"],
    ["前端模块化（AMD、CommonJS、UMD）总结", "https://zhuanlan.zhihu.com/p/75980415"]
  ]);
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}