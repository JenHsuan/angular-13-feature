import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

/*
* Take 1% time to go from 0% to 10%
* Take 99% time to go from 10% to 100%
* If there is no specific offset, the comsued time will be equally distributed
*/
const createCircleAnimation = () => [
  {
    maxWidth: '100%',
    clipPath: `circle(0%)`
  },
  {
    clipPath: `circle(10%)`,
    offset: 0.01
  },
  {
    clipPath: `circle(100%)`,
    offset: 0.98
  },
  {
    maxWidth: '100%',
    clipPath: `circle(0%)`,
  }
];

/*
* Take 99% time to rotate 1800deg
*/
const rotatationAnimation = {
  transform: [
    'rotate(1800deg)',
  ],
  offset: [0.99],
  easing: [ 'ease-in', 'ease-out' ],
}

@Component({
  selector: 'app-inline-font-web-animation',
  templateUrl: './inline-font-web-animation.component.html',
  styleUrls: ['./inline-font-web-animation.component.scss']
})
export class InlineFontWebAnimationComponent {
  @ViewChild("revertedLogo", {read: ElementRef}) revertedLogo: ElementRef | undefined; 
  @Input() a: number;
  @Output() aChange = new EventEmitter<number>();

  switchImage() {
    //animation is asynchronous
    this.revertedLogo?.nativeElement.animate(createCircleAnimation(), {
      duration: 3000,
      easing: 'ease-in-out',
      delay: 100,
    });
    console.log('the animation is triggered');

    this.revertedLogo?.nativeElement.animate(rotatationAnimation, {
      duration: 500,
      iterations: 1,
      delay: 1000,
    });
  }
}
