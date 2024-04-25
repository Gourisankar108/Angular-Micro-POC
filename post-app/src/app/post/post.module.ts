import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PostRoutingModule
  ]
})
export class PostModule { }
