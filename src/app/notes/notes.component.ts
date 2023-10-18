import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  instruction = `
  npx @angular/cli@13 new Angular13Project
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
