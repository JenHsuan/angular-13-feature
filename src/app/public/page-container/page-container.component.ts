import { Component, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  @Input('title') title: string | undefined;
  @Input() sectionTitles: string[];
  @Input() sections: QueryList<ElementRef> | undefined;
  @Input() getIdFromTitle: Function; 
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
