import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountItemDetailsComponent } from './bank-account-item-details.component';

describe('BankAccountItemDetailsComponent', () => {
  let component: BankAccountItemDetailsComponent;
  let fixture: ComponentFixture<BankAccountItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
