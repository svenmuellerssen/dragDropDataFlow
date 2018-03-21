import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatusItemDetailsComponent } from './system-status-item-details.component';

describe('SystemStatusItemDetailsComponent', () => {
  let component: SystemStatusItemDetailsComponent;
  let fixture: ComponentFixture<SystemStatusItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemStatusItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStatusItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
