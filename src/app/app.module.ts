import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDhis2ValidationRuleFilterModule } from 'projects/ngx-dhis2-validation-rule-filter/src/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDhis2ValidationRuleFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
