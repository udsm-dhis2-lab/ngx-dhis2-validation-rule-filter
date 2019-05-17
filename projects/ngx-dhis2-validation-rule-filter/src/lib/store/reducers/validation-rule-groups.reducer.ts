import * as fromActions from '../actions/validation-rule-groups.action';
export interface ValidationRuleGroupState {
    data: any[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: ValidationRuleGroupState = {
    data    : [],
    loaded  : false,
    loading : false,
};

export function reducer (
    state = initialState,
    action: fromActions.ValidationRuleGroupsActions
): ValidationRuleGroupState {
    switch (action.type) {
        case fromActions.LOAD_VALIDATION_RULE_GROUPS: {
            return {
                ...state,
                loading : true,
            };
        }
        case fromActions.LOAD_VALIDATION_RULE_GROUPS_SUCCESS: {
            // tslint:disable-next-line: no-string-literal
            const data = action.payload['validationRuleGroups'];
            return {
                ...state,
                loading : false,
                loaded  : true,
                data
            };
        }
        case fromActions.LOAD_VALIDATION_RULE_GROUPS_FAIL: {
            return {
                ...state,
                loading : false,
                loaded  : false,
            };
        }
    }
    return state;
}

export const getValidationRuleGroupLoading = (
    state: ValidationRuleGroupState
) => state.loading;

export const getValidationRuleGroupLoaded = (state: ValidationRuleGroupState) =>
    state.loaded;

export const getValidationRuleGroups = (state: ValidationRuleGroupState) =>
    state.data;
