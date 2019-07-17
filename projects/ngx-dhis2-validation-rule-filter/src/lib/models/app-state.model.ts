import { ValidationRuleGroup } from 'ngx-dhis2-validation-rule-filter/lib/models/validation-rule-group';

export interface ValidationRuleGroupData {
    validationRuleGroup: Array<ValidationRuleGroup>;
    periodType: Array<string>;
}

