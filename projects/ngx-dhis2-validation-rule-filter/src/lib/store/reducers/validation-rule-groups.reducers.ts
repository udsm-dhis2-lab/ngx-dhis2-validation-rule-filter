import {
    ValidationRuleGroupActions,
    VRGActionTypes,
} from '../actions/validation-rule-groups.actions';
import { getAllValidationRuleGroup } from '../../helpers/extract-validation-rule-group.helper';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ValidationRuleGroup } from '../../models/validation-rule-group';
import { ValidationRuleGroupData } from '../../models/app-state.model';
import * as _ from 'lodash';

export interface State extends EntityState<ValidationRuleGroup> {
    selectedValidationRuleGroup: number | string | null;
    periodType: Array<string>;
    loaded: boolean;
    loading: boolean;
}

export const validationRuleAdapter: EntityAdapter<
    ValidationRuleGroup
> = createEntityAdapter<ValidationRuleGroup>();

export const defaultValidationRuleGroupState: State = {
    ids: [],
    entities: {},
    selectedValidationRuleGroup: null,
    periodType: null,
    loaded: false,
    loading: false,
};

export const initialState: State = validationRuleAdapter.getInitialState(
    defaultValidationRuleGroupState
);

export function reducer(state = initialState, action: VRGActionTypes): State {
    switch (action.type) {
        case ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS: {
            return {
                ...state,
                loading: true,
            };
        }
        case ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS_SUCCESS: {
            const validationRuleGroups: ValidationRuleGroupData = _.clone(
                getAllValidationRuleGroup(action.payload)
            );

            return validationRuleAdapter.addAll(
                validationRuleGroups.validationRuleGroup,
                {
                    ...state,
                    periodType: validationRuleGroups.periodType,
                    loading: false,
                    loaded: true,
                }
            );
        }
        case ValidationRuleGroupActions.LOAD_VALIDATION_RULE_GROUPS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
    }
    return state;
}
