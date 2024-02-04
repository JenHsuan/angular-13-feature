import { Component, Input, OnInit } from '@angular/core';
import { getCodeFromMap } from './utils/utils';
import { Code } from './service/code.domain';
//import { codeMap } from '../config/code-map';

@Component({
  selector: 'app-code-container',
  templateUrl: './code-container.component.html',
  styleUrls: ['./code-container.component.scss']
})
export class CodeContainerComponent {
  @Input() key: string;
  @Input() codeMap: Map<string, Code>;

  codeFromMap: Code;
  
  ngOnInit() {
    this.codeFromMap = getCodeFromMap(this.key, this.codeMap);
  }

  get code(): string {
    return this.codeFromMap.code;
  }

  get languages(): string[] {
    return this.codeFromMap.languages;
  }
}
