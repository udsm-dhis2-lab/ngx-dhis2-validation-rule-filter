import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoadingComponent } from './components/loading/loading.component';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';
import { NgxDhis2ValidationRuleFilterComponent } from './containers/validation-rule-group/ngx-dhis2-validation-rule-filter.component';
import { FilterByNamePipe } from './pipes/search-by-name.pipe';
import { NgxDhis2ValidationRuleFilterService } from './services/ngx-dhis2-validation-rule-filter.service';
import { ValidationRuleGroupEffects } from './store/effects/validation-rule-groups.effects';
import { reducer } from './store/reducers/validation-rule-groups.reducers';

@NgModule({
  declarations: [
    NgxDhis2ValidationRuleFilterComponent,
    ProgressLoaderComponent,
    LoadingComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('validationRuleGroups', reducer),
    EffectsModule.forFeature([ValidationRuleGroupEffects]),
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent],
  providers: [NgxDhis2ValidationRuleFilterService]
})
export class NgxDhis2ValidationRuleFilterModule {}
