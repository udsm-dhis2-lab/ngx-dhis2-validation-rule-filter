import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import { validationRuleAdapter } from '../reducers/validation-rule-groups.reducers';
import { State } from '../reducers/validation-rule-groups.reducers';

export const getApplicationState = createFeatureSelector<State>(
    'validationRuleGroups'
);

export const getValidationRuleGroupState = createSelector(
    getApplicationState,
    (state: State) => state
);

export const getAllValidationRuleGroups = createSelector(
    getValidationRuleGroupState,
    validationRuleAdapter.getSelectors().selectAll
);

export const getValidationRulePeriodTypes = createSelector(
    getValidationRuleGroupState,
    (validationRuleGroup: State) => validationRuleGroup.periodType
);

export const getValidationRuleGroupsLoaded = createSelector(
    getValidationRuleGroupState,
    (validationRuleGroup: State) => validationRuleGroup.loaded
);

export const getValidationRuleGroupsLoading = createSelector(
    getValidationRuleGroupState,
    (validationRuleGroup: State) => validationRuleGroup.loading
);
