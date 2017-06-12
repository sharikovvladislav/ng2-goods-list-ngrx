import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Good } from '../models/good';


@Component({
  selector: 'bc-goods-detail',
  template: `
    <span>good id: {{good.id}}</span>
    <input [(ngModel)]="good.name" />
    <button (click)="save.emit(good)">Save</button>
  `,
  styles: []
})
export class GoodsDetailComponent {
  @Input() good: Good;
  @Output() save  = new EventEmitter<Good>();
}
