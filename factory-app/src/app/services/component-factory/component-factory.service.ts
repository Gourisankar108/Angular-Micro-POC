import { ComponentRef, Injectable, ViewContainerRef, inject } from '@angular/core';
import { DynamicTemplateService } from '../dynamic-template/dynamic-template.service';
import * as FactoryComponents from '../../components';
@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {
  private dynamicTemplateService = inject(DynamicTemplateService)

  private indexA: number = 1;
  createComponentA(viewContainerRef: ViewContainerRef): ComponentRef<FactoryComponents.ComponentA> {
    const componentInstance = this.dynamicTemplateService.appendComponentToBody(
      FactoryComponents.ComponentA,
      viewContainerRef
    ) as ComponentRef<FactoryComponents.ComponentA>;

    componentInstance.instance.content = 'Content From Host ( ' + this.indexA.toString() + ' )';
    this.indexA++;
    return componentInstance;
  }

  createComponentB(viewContainerRef: ViewContainerRef): ComponentRef<FactoryComponents.ComponentB> {
    const componentInstance = this.dynamicTemplateService.appendComponentToBody(
      FactoryComponents.ComponentB,
      viewContainerRef
    ) as ComponentRef<FactoryComponents.ComponentB>;

    componentInstance.instance.buttonClicked.subscribe(res => {
      console.log(res);
    });
    return componentInstance;
  }

  createComponentC(viewContainerRef: ViewContainerRef): ComponentRef<FactoryComponents.ComponentC> {
    return this.dynamicTemplateService.appendComponentToBody(
      FactoryComponents.ComponentC,
      viewContainerRef
    ) as ComponentRef<FactoryComponents.ComponentC>;
  }
}
