import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountItemComponent } from './bank-account-item.component';

describe('BankAccountItemComponent', () => {
  let component: BankAccountItemComponent;
  let fixture: ComponentFixture<BankAccountItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
