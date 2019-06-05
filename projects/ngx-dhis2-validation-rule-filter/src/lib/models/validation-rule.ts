import { ValidationRuleGroup } from './validation-rule-group';
export interface ValidationRule {
    name: string;
    id: string;
    periodType: string;
    validationRuleGroups: ValidationRuleGroup[];
}
