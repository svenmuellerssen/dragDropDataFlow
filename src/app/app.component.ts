import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ItemInjectDirective } from './directives/item-inject.directive';
import * as socketIo from 'socket.io-client';

import { SystemStatusItemComponent } from './components/system-status-item/system-status-item.component';
import { EmailItemComponent } from './components/email-item/email-item.component';
import { ProjectItemDetailsComponent } from './components/project-item/project-item-details.component';
import { BankAccountItemComponent } from './components/bank-account-item/bank-account-item.component';
import { ComponentFactory } from '@angular/core/src/linker/component_factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private socket: any;

  @ViewChild(ItemInjectDirective) componentInjecter: ItemInjectDirective;
  /**
   * Items shown as incoming message.
   *
   * Types are:
   * 1 => CRM project reminder,
   * 2 => Bank account stats,
   * 3 => Email,
   * 4 => System stats
   *
   * @param {any[]} incomingItems
   */
  public incomingItems: any[];

  public constructor(private componentFactoryResolver: ComponentFactoryResolver)
  {
    this.socket = socketIo('http://localhost:1025');
    this.listenToSocketMessages();
    // Dummy list items with different types to simulate incoming message items.
    this.incomingItems = [
      {id: 1, type: 4, title: 'example.example.com', memory: 12102328321, memoryText: '38%', cpuText: '2%', status: 0, avgTime: 12},
      {id: 2, type: 3,
      subject: 'Heute super Büroangebot: 2 Taschentücher zum Preis von 5',
      content: 'Sehen Sie hier das neuste aus 30 Jahren Forschung! Wir wollen Ihnen als treuer Kunde ...',
      sender: 'heike.malksch@example.com', status: 1},
      {id: 3, type: 2, credit: 1443.34, debit: 1356.86, win: 86.48, month: 8, monthText: 'August'},
      {id: 4, type: 1, name: 'Flyer für NASA-Ball',
      reminderText: 'Abgabedatum läuft in 3 Tagen ab', date: '20160404120000', customer: 2343},
      {id: 5, type: 3,
      subject: 'Ihr Angebot vom 13.06.2014 ...',
      content: 'Sehr geehrter Herr Stoppl, vielen Dank für Ihr Angebot, dass Sie uns so zeitnah haben zukommen lassen. ',
      sender: 'heinrich.stoppl@example.com', status: 1},
      {id: 6, type: 1, name: 'Magazinartikel: Mattes Hennecke',
      reminderText: 'seit 10 Tagen keine Rechnung gestellt', date: '20160308230000', customer: 112},
      {id: 7, type: 1, name: 'Website-Texte', reminderText: '', date: '', customer: 66434},
      {id: 8, type: 3,
      subject: 'Weihnachtsgrüße von Eldarobe',
      content: 'Seit langem sind sie Kunde bei Eldarobe und halten uns die Treue. Das soll jetzt belohnt werden mit einem exklusiven Weihnachtsessen im Hotel ...',
      sender: 'jens.juvenitsch@example.com', status: 1},
      {id: 9, type: 4, title: 'Localhost',memory: 6102328321,memoryText: '18.5%',cpuText: '65%',status: 0,avgTime:12},
      {id: 10, type: 3, subject: 'AW: Anfrage auf Mitgliedschaft bei Ihnen',
      content: 'Sehr geehrte Frau Uwatisch, Ihrer Anfrage auf Mitgliedschaft in unserem exklusiven Club können und wollen wir stattgeben. Wir freuen uns auf Ihre Besuche in unseren Räumen, Restaurant und den exklusiven Vorteilen der Mitgliedschaft.',
      sender: 'kuwatisch@example.com', status: 1},
      {id: 12, type: 2, credit:2623.13,debit:2004.75,win:618.38,month: 12,monthText:'December'},
    ];
  }

  private listenToSocketMessages()
  {
    this.socket.on('newItem', item => {
      console.log(item);
      this.incomingItems.push(item);
      this.incomingItems.shift();
    });
  }
  /**
   * Display detail information based on currently dragged list item.
   * Here a new detail component will be created and injected into the parent component.
   *
   * @public
   * @param {any} item
   */
  public displayItemDetails(item: any)
  {
    let componentFactory: ComponentFactory<any>|null = null;
    // Get detail component factory based on dragged item type to create detail component.
    switch (item.dragData.type) {
      case 1: // Project
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProjectItemDetailsComponent);
        break;
      case 2: // Bank account item
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(BankAccountItemComponent);
        break;
      case 3: // Email
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(EmailItemComponent);
        break;
      case 4: // System status
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(SystemStatusItemComponent);
        break;
    }

    if (null !== componentFactory) {
      // Clear detail zone from maybe displayed details.
      this.cleanDetailZone();
      // Create component reference based on current selected/dragged item type.
      const componentRef = this.componentInjecter.viewContainerRef.createComponent(componentFactory, 0);
      // Set item information to the created detail component.
      componentRef.instance.setItem(item.dragData);
      // At this point it is a bit ugly because here we subscribe to a dynamic instance "@Output" property instead of an event name!!
      componentRef.instance.onRemoveDetails.subscribe( () => {
        // Just clear detail component from detail zone.
        this.cleanDetailZone();
      });

      componentRef.instance.onRemoveItem.subscribe( (itemId) => {
        // Clear detail component from detail zone.
        this.cleanDetailZone();

        let itemIndex: number|null = null;
        // Get index of current displayed item.
        for (let index in this.incomingItems) {
          if (itemId === this.incomingItems[index].id) {
            itemIndex = Number(index);
            break;
          }
        }
        // Remove current item from list.
        if (itemIndex !== null) {
          this.incomingItems.splice(itemIndex, 1);
        }
      });
    }
  }

  /**
   * Remove currently injected detail component.
   * @private
   * @memberOf AppComponent
   */
  private cleanDetailZone()
  {
    this.componentInjecter.viewContainerRef.remove();
  }
}
