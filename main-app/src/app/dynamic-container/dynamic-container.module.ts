import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { WatchComponent } from './watch/watch.component';



@NgModule({
  declarations: [
    MobileComponent,
    LaptopComponent,
    WatchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicContainerModule { }
