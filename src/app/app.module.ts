import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { EmailItemComponent } from './components/email-item/email-item.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { SystemStatusItemComponent } from './components/system-status-item/system-status-item.component';
import { BankAccountItemComponent } from './components/bank-account-item/bank-account-item.component';
import { ItemInjectDirective } from './directives/item-inject.directive';
import { BankAccountItemDetailsComponent } from './components/bank-account-item/bank-account-item-details.component';
import { ProjectItemDetailsComponent } from './components/project-item/project-item-details.component';
import { SystemStatusItemDetailsComponent } from './components/system-status-item/system-status-item-details.component';
import { EmailItemDetailsComponent } from './components/email-item/email-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailItemComponent,
    ProjectItemComponent,
    SystemStatusItemComponent,
    BankAccountItemComponent,
    ItemInjectDirective,
    BankAccountItemDetailsComponent,
    ProjectItemDetailsComponent,
    SystemStatusItemDetailsComponent,
    EmailItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    EmailItemComponent,
    EmailItemDetailsComponent,
    ProjectItemComponent,
    ProjectItemDetailsComponent,
    SystemStatusItemComponent,
    SystemStatusItemDetailsComponent,
    BankAccountItemComponent,
    BankAccountItemDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
