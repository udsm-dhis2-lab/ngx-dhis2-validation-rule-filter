import { NgModule } from '@angular/core';
import { NgxDhis2ValidationRuleFilterComponent } from './components/validation-rule-group/ngx-dhis2-validation-rule-filter.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';

import { ValidationRuleGroupEffects } from './store/effects/validation-rule-groups.effects';
import { reducer } from './store/reducers/validation-rule-groups.reducers';
import { NgxDhis2ValidationRuleFilterService } from './services/ngx-dhis2-validation-rule-filter.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    NgxDhis2ValidationRuleFilterComponent,
    ProgressLoaderComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('validationRuleGroups', reducer),
    EffectsModule.forFeature([ValidationRuleGroupEffects]),
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent],
  providers: [NgxDhis2ValidationRuleFilterService],
})
export class NgxDhis2ValidationRuleFilterModule { }
