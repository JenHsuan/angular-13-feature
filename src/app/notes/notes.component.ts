import { Component, OnInit } from '@angular/core';
import { PORTAL_TYPE, TYPE_TITLE_MAP } from '../pulbic/route/route.domain';
import { escapeHtml } from '../pulbic/utils/utils';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(PORTAL_TYPE.NOTES);
  escapeHtml = escapeHtml;
}
