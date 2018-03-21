import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'bank-account-item',
  templateUrl: './bank-account-item.component.html',
  styleUrls: ['./bank-account-item.component.css']
})
export class BankAccountItemComponent {
  @Input()
  public bankAccountItem: any;

  constructor()
  {
    this.bankAccountItem = {};
  }


  public setItem(item: any)
  {
    this.bankAccountItem = item;
  }
}
