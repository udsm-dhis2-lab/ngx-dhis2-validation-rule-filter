export interface APIResult {
    pager: {};
    validationRules?: Array<{ id: string, name: string }>;
    validationRuleGroups?: Array<{ id: string, displayName: string }>;
}
