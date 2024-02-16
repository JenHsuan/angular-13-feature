import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-container',
  templateUrl: './evaluation-container.component.html',
  styleUrls: ['./evaluation-container.component.scss']
})
export class EvaluationContainerComponent {
  @Input("pros") pros: string[];
  @Input("cons") cons: string[];
}
