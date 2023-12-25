import { Component, OnInit } from '@angular/core';
import { PORTAL_TYPE, TYPE_TITLE_MAP } from '../pulbic/route/route.domain';
import { escapeHtml } from '../pulbic/utils/utils';

@Component({
  selector: 'app-inline-font',
  templateUrl: './inline-font.component.html',
  styleUrls: ['./inline-font.component.scss']
})
export class InlineFontComponent implements OnInit {
  title = TYPE_TITLE_MAP.get(PORTAL_TYPE.FONT);
  escapeHtml = escapeHtml;

  steps = `
  //1. Update angular.json (build -> configuration -> production)

  "optimization": {
    "fonts": {
      "inline": true
    },
    "styles": {
      "inlineCritical": true
    }
  }

  //2. Search the favorite font on https://fonts.adobe.com/fonts
  
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
