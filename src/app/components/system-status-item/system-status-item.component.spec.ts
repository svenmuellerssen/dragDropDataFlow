import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatusItemComponent } from './system-status-item.component';

describe('SystemStatusItemComponent', () => {
  let component: SystemStatusItemComponent;
  let fixture: ComponentFixture<SystemStatusItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemStatusItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStatusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
