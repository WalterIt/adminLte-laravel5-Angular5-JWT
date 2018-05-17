import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResponseResetRoutingModule } from './response-reset-routing.module';
import { ResponseResetComponent } from './response-reset.component';


@NgModule({
    imports: [
        CommonModule,
        ResponseResetRoutingModule,
        FormsModule
    ],
    declarations: [
        ResponseResetComponent,
    ]
})@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ResponseResetModule { }
