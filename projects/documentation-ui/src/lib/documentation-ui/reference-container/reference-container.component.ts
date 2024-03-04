import { Component, Input, OnInit } from '@angular/core';
import { originalOrder } from '../../../utils/utils';

@Component({
  selector: 'app-reference-container',
  templateUrl: './reference-container.component.html',
  styleUrls: ['./reference-container.component.scss']
})
export class ReferenceContainerComponent {
  @Input("references") references: Map<string, string>;
  originalOrder = originalOrder;
}
