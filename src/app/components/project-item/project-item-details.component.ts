import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-item-details',
  templateUrl: './project-item-details.component.html',
  styleUrls: ['./project-item-details.component.css'],
  providers: [ProjectService]
})
export class ProjectItemDetailsComponent {
  @Input()
  public project: any;

  @Output()
  public onRemoveDetails: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public onRemoveItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private projectService: ProjectService)
  {
    this.project = {
      id: 0,
      type: 1,
      name: '',
      reminderText: '',
      date: '',
      customer: 0
    };
  }

  /**
   * @param {*} item
   * @memberOf ProjectItemDetailsComponent
   */
  public setItem(item: any)
  {
    this.projectService.getById(item.id, 2000).then( project => {
      this.project = project;
    });
  }

  /**
   * @param {*} item
   * @memberOf ProjectItemDetailsComponent
   */
  public throwAway(item: any)
  {
    this.onRemoveItem.emit(item.dragData.id);
  }

  public archive(item: any)
  {
    this.onRemoveDetails.emit({});
  }
}
