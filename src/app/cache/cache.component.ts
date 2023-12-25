import { Component, OnInit } from '@angular/core';
import { PORTAL_TYPE, TYPE_TITLE_MAP } from '../pulbic/route/route.domain';
import { escapeHtml } from '../pulbic/utils/utils';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent implements OnInit {
  title = TYPE_TITLE_MAP.get(PORTAL_TYPE.CACHE);
  escapeHtml = escapeHtml;
  
  angularjson = `
  //angular.json

  {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "cli": {
      "analytics": "a7da08fe-30d4-42ce-a659-5296089127b8",
      "cache": {
        "enabled": true,
        "environment": "all",
        "path": ".angular-cache"
      }
      ...
  }

  //angular-cli
  
  ng config cli.cache.enabled false/true
  ng config cli.cache.environment all/ci/local
  ng config cli.cache.path ".angular-cache"
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
