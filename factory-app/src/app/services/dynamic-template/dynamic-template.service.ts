import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ComponentFactoryService } from '../../models/factory.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicTemplateService implements ComponentFactoryService {
  public appendComponentToBody<T>(componentTemplate: T, TargetElement: ViewContainerRef): ComponentRef<unknown> {
    const componentFactory = TargetElement.createComponent(componentTemplate as any);
    return componentFactory;
  }
}
