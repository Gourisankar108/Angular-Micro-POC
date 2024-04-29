import { ComponentRef, ViewContainerRef } from '@angular/core';

export interface ComponentFactoryService {
  appendComponentToBody<T>(componentTemplate: T, TargetElement: ViewContainerRef): ComponentRef<any>;
}