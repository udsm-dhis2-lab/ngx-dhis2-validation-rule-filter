import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDhis2ValidationRuleFilterComponent } from './containers/ngx-dhis2-validation-rule-filter/ngx-dhis2-validation-rule-filter.component';

@NgModule({
    declarations : [
        NgxDhis2ValidationRuleFilterComponent,
    ],
    imports      : [CommonModule, FormsModule],
    exports      : [
        NgxDhis2ValidationRuleFilterComponent,
    ],
})
export class NgxDhis2ValidationRuleFilterModule {}
