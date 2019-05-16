import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDhis2ValidationRuleFilterModule } from 'projects/ngx-dhis2-validation-rule-filter/src/public-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule, Actions, Effect, ofType } from '@ngrx/effects';


// TodO: Import the following dependencies
// BrowserAnimationModule

// Not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';


// This would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];




@NgModule({
  declarations: [
    AppComponent,
    // StoreModule.forRoot({ count: counterReducer })
    // EffectsModule.forRoot([]),
    // environment.development ? StoreDevtoolsModule.instrumentStore() : [],
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDhis2ValidationRuleFilterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
