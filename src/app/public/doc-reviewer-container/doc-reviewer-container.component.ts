import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doc-reviewer-container',
  templateUrl: './doc-reviewer-container.component.html',
  styleUrls: ['./doc-reviewer-container.component.scss']
})
export class DocReviewerContainerComponent {
  @Input() titles: string[];
  @Input() sections: QueryList<ElementRef> | undefined;
  @Input() getIdFromTitle: Function; 
  @ViewChildren("menu") menu: QueryList<ElementRef> | undefined;
  showBackTop = false;
  currentIndex = -1;

  icon = faArrowUp;

  ngAfterViewInit() {
    addEventListener("scroll", (event) => {
      if ((window.innerHeight + Math.round(document.documentElement.scrollTop)) >= document.body.scrollHeight) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }

      this.sections?.toArray().forEach((section, index) => {
        if (this.isInViewport(section)) {
          this.currentIndex = index;
          this.menu?.get(index)?.nativeElement.classList.add("active")
        }
      })

      this.sections?.toArray().forEach((section, index) => {
        if (index !== this.currentIndex) {
          this.menu?.get(index)?.nativeElement.classList.remove("active")}
      })
    });
  }

  isInViewport (elem: ElementRef) {
    const bounding = elem.nativeElement.getBoundingClientRect();
    return (bounding.top < 0);
  }

  getHash(title: string) {
    return `#${this.getIdFromTitle(title)}`;
  }
  
  moveTop() {
    window.scrollTo(0, 0);
  }
}
