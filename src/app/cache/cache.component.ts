import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent implements OnInit {

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
