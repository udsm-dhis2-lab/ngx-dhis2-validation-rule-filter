import { NgModule } from '@angular/core';
import { NgxDhis2ValidationRuleFilterComponent } from './components/validation-rule-group/ngx-dhis2-validation-rule-filter.component';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';



@NgModule({
  declarations: [NgxDhis2ValidationRuleFilterComponent, ProgressLoaderComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('validationRuleGroups', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent]
})
export class NgxDhis2ValidationRuleFilterModule { }
