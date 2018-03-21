import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent {
  @Input()
  public email: any;

  constructor()
  {
    this.email = {};
  }

  public setItem(item: any)
  {
    this.email = item;
  }
}
