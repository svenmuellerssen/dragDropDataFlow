import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[itemInject]'
})
export class ItemInjectDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}
}
