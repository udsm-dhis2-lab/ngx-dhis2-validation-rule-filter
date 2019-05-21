import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as validationRuleActions from '../actions/validation-rule-groups.action';
import * as fromServices from '../../services/ngx-dhis2-validation-rule-filter.service';
import * as fromActionsTypes from '../actions/validation-rule-groups.action';

@Injectable()
export class ValidationRuleGroupEffects {
    constructor(private actions$: Actions, private validationRuleService: fromServices.NgxDhis2ValidationRuleFilterService) {}

    @Effect()
    LoadValidationRuleGroup$ = this.actions$.pipe(
        ofType(validationRuleActions.LOAD_VALIDATION_RULE_GROUPS),
        switchMap((action: fromActionsTypes.ValidationRuleGroupsActions) => {
            return this.validationRuleService
                .getValidationRuleGroups(action.payload)
                .pipe(
                    map(validationRuleGroup => new validationRuleActions.LoadValidationRuleGroupsSuccess(validationRuleGroup)),
                    catchError((error) => of(new validationRuleActions.LoadValidationRuleGroupsFail(error)))
                );
        })
    );
}
