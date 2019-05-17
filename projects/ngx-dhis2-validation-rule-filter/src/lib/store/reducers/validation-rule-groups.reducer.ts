import * as fromActions from '../actions/validation-rule-groups.action';
export interface ValidationRuleGroupState {
    entities: {[ id: string]: {}};
    loaded: boolean;
    loading: boolean;
}

export const initialState: ValidationRuleGroupState = {
    entities    : {},
    loaded  : false,
    loading : false,
};

export function reducer(
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
            const validationRuleGroups = action.payload['validationRuleGroups'];
            const entities = validationRuleGroups.reduce((entities: {[id: string]: {}}, validationRuleGroup) => {
                return {
                    ...entities,
                    [validationRuleGroup.id]: validationRuleGroup
                };
            }, {
                ...state.entities
            });
            return {
                ...state,
                loading : false,
                loaded  : true,
                entities
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

export const getValidationRuleGroupsEntities = (state: ValidationRuleGroupState) =>
    state.entities;

export const getValidationRuleGroupLoading = (
    state: ValidationRuleGroupState
) => state.loading;

export const getValidationRuleGroupLoaded = (state: ValidationRuleGroupState) =>
    state.loaded;


