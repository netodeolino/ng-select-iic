import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgSelectIicComponent } from './ng-select-iic.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    NgSelectIicComponent
  ],
  exports: [
    NgSelectIicComponent
  ]
})
export class NgSelectIicModule { }
