import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemDetailsComponent } from './project-item-details.component';

describe('ProjectItemDetailsComponent', () => {
  let component: ProjectItemDetailsComponent;
  let fixture: ComponentFixture<ProjectItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
