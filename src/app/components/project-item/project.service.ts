import { Injectable } from '@angular/core';
import { delay } from 'q';

@Injectable()
export class ProjectService {
  private projects: any[];
  constructor()
  {
    // Simulate projects from server.
    this.projects = [
      {id: 4, type: 1, name: 'Flyer für NASA-Ball',
        reminderText: 'Abgabedatum läuft in 3 Tagen ab',
        date: '20160404120000', customer: 2343
        },
      {id: 6, type: 1, name: 'Magazinartikel: Mattes Hennecke',
      reminderText: 'seit 10 Tagen keine Rechnung gestellt',
      date: '20160308230000', customer: 112},
      {id: 7, type: 1, name: 'Website-Texte', reminderText: '', date: '', customer: 66434}
    ];
  }

  public async getById(projectId: number, delayTime: number): Promise<any>
  {
    let project: any|null = null;
    for (project of this.projects) {
      if (projectId === project.id) {
        break;
      }
    }
    await delay(delayTime);
    return project;
  }
}
