import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import { TwowaydemoComponent } from './twowaydemo/twowaydemo.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TwowaydemoComponent,
    NgifdemoComponent,
    NgfordemoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
