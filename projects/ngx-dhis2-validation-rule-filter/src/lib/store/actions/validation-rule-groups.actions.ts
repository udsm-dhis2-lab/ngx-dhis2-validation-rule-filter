import { Action } from '@ngrx/store';
import { APIResult } from '../../models/api-result';

export enum ValidationRuleGroupActions {
    LOAD_VALIDATION_RULE_GROUPS = '[VALIDATION RULE GROUPS] Load Validation Rules Group',
    LOAD_VALIDATION_RULE_GROUPS_FAIL = '[VALIDATION RULE GROUPS] Load Validation Rules Group Fail',
    LOAD_VALIDATION_RULE_GROUPS_SUCCESS = '[VALIDATION RULE GROUPS] Load Validation Rules Group Success',
}

export class LoadValidationRuleGroups implements Action {
    readonly type = ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS;
    constructor(public payload: Array<string>) { }
}

export class LoadValidationRuleGroupsFail implements Action {
    readonly type = ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS_FAIL;
    constructor(public payload: any) { }
}

export class LoadValidationRuleGroupsSuccess implements Action {
    readonly type =
        ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS_SUCCESS;
    constructor(public payload: APIResult) { }
}

export type VRGActionTypes =
    | LoadValidationRuleGroups
    | LoadValidationRuleGroupsFail
    | LoadValidationRuleGroupsSuccess;
