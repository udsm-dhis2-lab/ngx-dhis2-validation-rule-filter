import { NgModule } from '@angular/core';
import { NgxDhis2ValidationRuleFilterComponent } from './components/validation-rule-group/ngx-dhis2-validation-rule-filter.component';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';



@NgModule({
  declarations: [NgxDhis2ValidationRuleFilterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('validationRuleGroups', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent]
})
export class NgxDhis2ValidationRuleFilterModule { }
