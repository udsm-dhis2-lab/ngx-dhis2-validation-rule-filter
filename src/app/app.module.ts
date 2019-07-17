import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDhis2ValidationRuleFilterModule } from 'projects/ngx-dhis2-validation-rule-filter/src/public-api';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule, Actions, Effect, ofType } from '@ngrx/effects';

// Todo: Import the following dependencies
// BrowserAnimationModule

// Not used in production
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { FormsModule } from '@angular/forms';

import { NgJsonEditorModule } from 'ang-jsoneditor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MainSubHeaderComponent } from './components/main-sub-header/main-sub-header.component';

// This would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent, MainHeaderComponent, MainFooterComponent, MainSubHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDhis2ValidationRuleFilterModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    NgJsonEditorModule,
    NgxJsonViewerModule
    // environment.development ? StoreDevtoolsModule.instrumentStore() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
