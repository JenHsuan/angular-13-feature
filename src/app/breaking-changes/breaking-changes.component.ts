import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TypeTitleMap } from '../public/route/route.domain';
import { SectionContainerComponent, getHash, getIdFromTitle } from 'angular-documentation-ui';
import { codeMap } from '../public/config/code-map';

@Component({
  selector: 'app-breaking-changes',
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export class BreakingChangesComponent {
  title = TypeTitleMap.get(RouteType.BREAKING_CHANGE);
  getIdFromTitle = getIdFromTitle;
  getHash = getHash;
  codeMap = codeMap;
  sectionTitles = [
    "Introduction",
    "Notable Items of TypeScript 4.4",
    "Differential Loading",
    "Rendering and Critical Path",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  
  referencesMap = new Map<string, string>([
    ["A Guide to Angular 8's Differential Loading", "https://auth0.com/blog/angular-8-differential-loading/"],
    ["SCRIPT 標籤與模組", "https://openhome.cc/zh-tw/javascript/script/module/"],
    ["Module 的載入實現", "https://yucj.gitbooks.io/ecmascript-6/content/docs/module-loader.html"],
    ["ie11支持es6吗", "https://juejin.cn/s/ie11%E6%94%AF%E6%8C%81es6%E5%90%97"],
    ["ES6 Module", "https://chupai.github.io/posts/2104/es6module/"],
    ["Whats New in RxJS 7", "https://medium.com/volosoft/whats-new-in-rxjs-7-a11cc564c6c0"],
    ["[掘竅] TypeScript", "https://pjchender.dev/typescript/typescript-tips/"],
    ["TypeScript学习笔记04——Symbol类型详细总结", "https://zhuanlan.zhihu.com/p/297923315"],
    ["Announcing TypeScript 4.4", "https://devblogs.microsoft.com/typescript/announcing-typescript-4-4"]
  ]);

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  moduleSyntax = `
  <script src="fancyModernBundle.js" type="module">
  `;

  moduleAsyncSyntax = `
  <script src="fancyModernBundle.js" type="module" async>
  `;
}
