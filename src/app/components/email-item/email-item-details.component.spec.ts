import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailItemDetailsComponent } from './email-item-details.component';

describe('EmailItemDetailsComponent', () => {
  let component: EmailItemDetailsComponent;
  let fixture: ComponentFixture<EmailItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
