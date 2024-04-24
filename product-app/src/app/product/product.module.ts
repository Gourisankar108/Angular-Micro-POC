import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
