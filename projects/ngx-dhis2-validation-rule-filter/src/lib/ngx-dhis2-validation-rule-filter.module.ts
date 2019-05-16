import { NgModule } from '@angular/core';
import { NgxDhis2ValidationRuleFilterComponent } from './components/validation-rule-group/ngx-dhis2-validation-rule-filter.component';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';



@NgModule({
  declarations: [NgxDhis2ValidationRuleFilterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('validationRuleGroups', reducers)
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent]
})
export class NgxDhis2ValidationRuleFilterModule { }
