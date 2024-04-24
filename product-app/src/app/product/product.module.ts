import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
