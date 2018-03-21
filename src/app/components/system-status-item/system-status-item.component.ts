import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'system-status-item',
  templateUrl: './system-status-item.component.html',
  styleUrls: ['./system-status-item.component.css']
})
export class SystemStatusItemComponent{
  @Input()
  public systemStatusItem: any;

  constructor() {
    this.systemStatusItem = {};
  }

  public setItem(item: any): void
  {
    this.systemStatusItem = item;
  }
}
