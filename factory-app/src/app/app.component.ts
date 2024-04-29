import { Component,  ViewContainerRef, inject } from '@angular/core';
import { ComponentFactoryService } from './services/component-factory/component-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _viewContainerRef = inject(ViewContainerRef);
  private _componentFactoryService = inject(ComponentFactoryService)

  createComponentA(): void {
    this._componentFactoryService.createComponentA(this._viewContainerRef);
  }

  createComponentB(): void {
    this._componentFactoryService.createComponentB(this._viewContainerRef);
  }

  createComponentC(): void {
    this._componentFactoryService.createComponentC(this._viewContainerRef);
  }
}
