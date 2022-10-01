import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiderbarComponent } from './siderbar/siderbar.component';



@NgModule({
  declarations: [
    SiderbarComponent
  ],
  exports: [
    SiderbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
