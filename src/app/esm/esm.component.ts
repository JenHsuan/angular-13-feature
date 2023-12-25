import { Component, OnInit } from '@angular/core';
import { EsmService } from './service/esm.service';
import { combineLatest } from 'rxjs';
import { PORTAL_TYPE, TYPE_TITLE_MAP } from '../pulbic/route/route.domain';
import { escapeHtml } from '../pulbic/utils/utils';

const PAGES = ['/'];

@Component({
  selector: 'app-esm',
  templateUrl: './esm.component.html',
  styleUrls: ['./esm.component.scss']
})
export class EsmComponent implements OnInit {
  title = TYPE_TITLE_MAP.get(PORTAL_TYPE.ESM);
  escapeHtml = escapeHtml;

  steps = `
  //1. Add proxy.conf.mjs
  
  export default {
    "/pdf": {
      "target": "http://localhost:3000",
      "secure": false
    }
  }

  //2. Update the angular.json file
  "architect": {
    ...,
    "serve": {
      "builder": "@angular-devkit/build-angular:dev-server",
      "options": {
        "proxyConfig": "proxy.conf.mjs"
      }

  //3. Setup the backend locally (http://localhost:3000)
  `;
  
  constructor(private service: EsmService) { }

  ngOnInit(): void {
  }

  printFromServer() {
    combineLatest(PAGES.map(page => this.service.exportPdfFromServer(page))).subscribe();
  }
}
