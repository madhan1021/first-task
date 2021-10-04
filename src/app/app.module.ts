import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WorkOrderComponent } from './work-order/work-order.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrderComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
       ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
