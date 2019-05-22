import { Action } from '@ngrx/store';
import * as fromModel from '../../models';

// Load validation rule groups

export const LOAD_VALIDATION_RULE_GROUPS = '[VALIDATION RULE GROUPS] Load Validation Rules Group';
export const LOAD_VALIDATION_RULE_GROUPS_FAIL = '[VALIDATION RULE GROUPS] Load Validation Rules Group Fail';
export const LOAD_VALIDATION_RULE_GROUPS_SUCCESS = '[VALIDATION RULE GROUPS] Load Validation Rules Group Success';

export class LoadValidationRuleGroups implements Action {
    readonly type = LOAD_VALIDATION_RULE_GROUPS;
    constructor(public payload: Array<string>) {}
}

export class LoadValidationRuleGroupsFail implements Action {
    readonly type = LOAD_VALIDATION_RULE_GROUPS_FAIL;
    constructor(public payload: any) {}
}

export class LoadValidationRuleGroupsSuccess implements Action {
    readonly type = LOAD_VALIDATION_RULE_GROUPS_SUCCESS;
    constructor(public payload: fromModel.APIResult) {}
}

// action types
export type ValidationRuleGroupsActions = LoadValidationRuleGroups | LoadValidationRuleGroupsFail | LoadValidationRuleGroupsSuccess;
