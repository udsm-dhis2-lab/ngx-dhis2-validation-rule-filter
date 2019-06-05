import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {
    ValidationRuleGroupActions,
    VRGActionTypes,
    LoadValidationRuleGroupsSuccess,
} from '../actions/validation-rule-groups.actions';
import { NgxDhis2ValidationRuleFilterService } from '../../services/ngx-dhis2-validation-rule-filter.service';

@Injectable()
export class ValidationRuleGroupEffects {
    constructor(
        private actions$: Actions,
        private validationRuleService: NgxDhis2ValidationRuleFilterService
    ) { }

    @Effect()
    LoadValidationRuleGroup$ = this.actions$.pipe(
        ofType(ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS),
        switchMap((action: VRGActionTypes) => {
            return this.validationRuleService
                .getValidationRuleGroups(action.payload)
                .pipe(
                    map(
                        validationRuleGroup =>
                            new LoadValidationRuleGroupsSuccess(validationRuleGroup)
                    )
                    // catchError((error) => of(new LoadValidationRuleGroupsFail(error)))
                );
        })
    );
}
