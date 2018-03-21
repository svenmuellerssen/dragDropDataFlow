import { Component, Input, Output } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  providers: [ProjectService]
})
export class ProjectItemComponent {
  @Input()
  public project: any;

  constructor(private projectService: ProjectService) {
    this.project = {};
  }

}
