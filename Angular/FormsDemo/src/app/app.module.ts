import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfdemoComponent } from './tdfdemo/tdfdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDFValidationdemoComponent } from './tdfvalidationdemo/tdfvalidationdemo.component';
import { MdfdemoComponent } from './mdfdemo/mdfdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfdemoComponent,
    TDFValidationdemoComponent,
    MdfdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
