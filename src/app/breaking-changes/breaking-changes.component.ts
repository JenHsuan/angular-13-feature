import { Component, OnInit } from '@angular/core';
import { PORTAL_TYPE, TYPE_TITLE_MAP } from '../pulbic/route/route.domain';
import { escapeHtml } from '../pulbic/utils/utils';

@Component({
  selector: 'app-breaking-changes',
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export class BreakingChangesComponent {
  title = TYPE_TITLE_MAP.get(PORTAL_TYPE.BREAKING_CHANGE);
  escapeHtml = escapeHtml;

}
