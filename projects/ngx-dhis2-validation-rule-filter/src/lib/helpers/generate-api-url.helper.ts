import * as _ from 'lodash';

export function generateValidationRuleAPI (dataElementUID: string[]) {
    const sanitizedDataElementUID = dataElementUID || [];
    if (sanitizedDataElementUID.length !== 0) {
        const validationRuleParameters = [
            'id',
            'name',
            'periodType',
        ];
        const validationRuleGroupParameters = [
            'id',
            'name',
        ];
        const preURL = `validationRules.json?fields=[${validationRuleParameters.join(
            ','
        )}],validationRuleGroups[${validationRuleGroupParameters.join(',')}]&`;
        const mapResult = _.map(sanitizedDataElementUID, (UID) => {
            return `filter=leftSide.expression:ilike:${UID}&filter=rightSide.expression:ilike:${UID}`;
        });
        const postURL = `&paging=false&rootJunction=OR`;
        return preURL + mapResult.join('&') + postURL;
    } else {
        return 'validationRuleGroups.json';
    }
}
