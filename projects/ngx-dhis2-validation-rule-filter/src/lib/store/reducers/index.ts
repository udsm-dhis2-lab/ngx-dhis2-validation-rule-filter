import * as fromReducer from '../reducers/validation-rule-groups.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ApplicationState {
    validationRuleGroups: fromReducer.ValidationRuleGroupState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
    validationRuleGroups : fromReducer.reducer,
};
