import { NgModule } from '@angular/core';
import { NgxDhis2ValidationRuleFilterComponent } from './components/validation-rule-group/ngx-dhis2-validation-rule-filter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

import { ValidationRuleGroupEffects } from './store/effects/validation-rule-groups.effects';
import { reducer } from './store/reducers/validation-rule-groups.reducers';
import { NgxDhis2ValidationRuleFilterService } from './services/ngx-dhis2-validation-rule-filter.service';

import { LoadingComponent } from './components/loading/loading.component';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';

import { NgxPaginationModule } from 'ngx-pagination';

import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { FilterByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    NgxDhis2ValidationRuleFilterComponent,
    ProgressLoaderComponent,
    LoadingComponent,
    FilterByNamePipe,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    StoreModule.forFeature('validationRuleGroups', reducer),
    EffectsModule.forFeature([ValidationRuleGroupEffects]),
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [NgxDhis2ValidationRuleFilterComponent],
  providers: [NgxDhis2ValidationRuleFilterService],
})
export class NgxDhis2ValidationRuleFilterModule {}
