import { APIResult } from '../models/api-result';
import { ValidationRule } from '../models/validation-rule';

import * as _ from 'lodash';

export function getAllValidationRuleGroup(apiResult: APIResult) {
    if (apiResult.hasOwnProperty('validationRules')) {
        const validationRules = apiResult.validationRules || [];
        if (validationRules.length !== 0) {
            const validationRuleGroup = validationRules.map(
                (validationRuleItem: ValidationRule) => {
                    return validationRuleItem.validationRuleGroups.map(data => {
                        return data;
                    });
                }
            );
            return _.unionWith(
                sanitizeAllValidationRuleGroup(validationRuleGroup),
                _.isEqual
            );
        } else {
            return [];
        }
    } else if (apiResult.hasOwnProperty('validationRuleGroups')) {
        return apiResult.validationRuleGroups.map(validationRuleGroup => {
            if (validationRuleGroup.displayName) {
                return {
                    id: validationRuleGroup.id,
                    name: validationRuleGroup.displayName,
                };
            }
        });
    } else {
        return [];
    }
}

function sanitizeAllValidationRuleGroup(data: Array<Array<{}>>) {
    const datas = data || [];
    const allValidationRuleGroup = [];
    if (datas) {
        datas.forEach((dataArray: Array<{}>) => {
            dataArray.forEach(dataItem => {
                if (dataItem) {
                    if (!allValidationRuleGroup.includes(dataItem)) {
                        allValidationRuleGroup.push(dataItem);
                    }
                }
            });
        });
        return allValidationRuleGroup;
    } else {
        return [];
    }
}
