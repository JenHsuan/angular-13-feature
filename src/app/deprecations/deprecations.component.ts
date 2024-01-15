import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from '../public/utils/utils';

@Component({
  selector: 'app-deprecations',
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export class DeprecationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEPRECATIONS);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["ngcc", "https://v13.angular.io/guide/glossary#ngcc"],
    ["From View Engine to Ivy: Rendering in Angular", "https://browserperson.medium.com/from-view-engine-to-ivy-rendering-in-angular-a81d9eb8199b"],
    ["Angular框架解读--Ivy编译器之增量DOM", "https://godbasin.github.io/2021/12/05/angular-design-ivy-5-incremental-dom/"],
    ["Understanding Angular Ivy: Incremental DOM and Virtual DOM", "https://blog.nrwl.io/understanding-angular-ivy-incremental-dom-and-virtual-dom-243be844bf36"],
    ["What is ngcc in Angular Ivy and why is it important?", "https://iq.js.org/questions/angular/what-is-ngcc"],
    ["Angular5 服务器渲染(SSR)", "https://www.cnblogs.com/huiguo/p/10809264.html"]
  ]);
  items: number[] = [];
  cnt = 0;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  renderModule = `
  import 'reflect-metadata';
  import 'zone.js/dist/zone-node';
  import { renderModuleFactory } from '@angular/platform-server'
  import { enableProdMode } from '@angular/core'
  import * as express from 'express';
  import { join } from 'path';
  import { readFileSync } from 'fs';

  enableProdMode();

  const PORT = process.env.PORT || 4200;
  const DIST_FOLDER = join(process.cwd(), 'dist');

  const app = express();

  const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
  const { AppServerModuleNgFactory } = require('main.server');

  app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
    });

  app.set('view engine', 'html');
  app.set('views', 'src')

  app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

  app.get('*', (req, res) => {
    res.render('index', { req });
  });

  app.listen(PORT, () => {
    console.log('listening on PORT!');
  });
  `;
}
