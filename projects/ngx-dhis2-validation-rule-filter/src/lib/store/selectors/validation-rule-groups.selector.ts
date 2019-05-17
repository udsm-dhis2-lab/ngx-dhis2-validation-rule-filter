import * as fromActions from '../actions/validation-rule-groups.action';
import * as fromReducer from '../reducers/validation-rule-groups.reducer';
import * as fromRootReducer from '../reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const getApplicationState = createFeatureSelector<fromRootReducer.ApplicationState>(
    'validationRuleGroups'
);

// Validation rule state
export const getValidationRuleGroupState = createSelector(
    getApplicationState,
    (state: fromRootReducer.ApplicationState) => state.validationRuleGroups
);


export const getValidationRuleGroupsEntities = createSelector(getValidationRuleGroupState, fromReducer.getValidationRuleGroupsEntities);

export const getAllValidationRuleGroups = createSelector(
    getValidationRuleGroupsEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
);

export const getValidationRuleGroupsLoaded = createSelector(getValidationRuleGroupState, fromReducer.getValidationRuleGroupLoaded);
export const getValidationRuleGroupsLoading = createSelector(getValidationRuleGroupState, fromReducer.getValidationRuleGroupLoading);


