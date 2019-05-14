import { NgModule } from '@angular/core';
import { NgxDhis2ValidationRuleFilterComponent } from './ngx-dhis2-validation-rule-filter.component';
import { ValidationRuleFilterComponent } from './containers/validation-rule-filter/validation-rule-filter.component';

@NgModule({
  declarations: [NgxDhis2ValidationRuleFilterComponent, ValidationRuleFilterComponent],
  imports: [
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent]
})
export class NgxDhis2ValidationRuleFilterModule { }
