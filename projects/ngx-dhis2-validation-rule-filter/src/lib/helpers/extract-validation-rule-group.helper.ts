import * as fromModel from '../models';
import * as _ from 'lodash';

export function getAllValidationRuleGroup(validationRule: fromModel.APIResult) {
    const validationRules = validationRule.validationRules || [];
    if (validationRules.length !== 0) {
        const validationRuleGroup = validationRules.map((validationRuleItem: fromModel.ValidationRule) => {
            return validationRuleItem.validationRuleGroups.map((data) => {
                return data;
            });
        });
        return _.unionWith(sanitizeAllValidationRuleGroup(validationRuleGroup), _.isEqual);
    }
}

function sanitizeAllValidationRuleGroup(data: Array<Array<{}>>) {
    const datas = data || [];
    const allValidationRuleGroup = [];
    if (datas) {
        datas.forEach((dataArray: Array<{}>) => {
            dataArray.forEach((dataItem) => {
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
