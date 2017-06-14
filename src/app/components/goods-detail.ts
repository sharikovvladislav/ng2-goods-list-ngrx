import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-detail',
  template: `
    <span>good id: {{good?.id}}</span>
    <input [value]="good?.name" (input)="onInput($event)" />
    <button (click)="onClick()">Save</button>
  `,
  styles: []
})
export class GoodsDetailComponent {
  @Input() good: Good;
  @Output() save  = new EventEmitter<Good>();

  onClick() {
    this.save.emit(this.good);
  }

  onInput ($event) {
    this.good.name = $event.target.value;
  }
}
