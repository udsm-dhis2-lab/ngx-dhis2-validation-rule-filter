import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector    : 'lib-ngx-dhis2-validation-rule-filter',
    templateUrl : './ngx-dhis2-validation-rule-filter.component.html',
    styleUrls   : [
        './ngx-dhis2-validation-rule-filter.component.css',
    ],
})
export class NgxDhis2ValidationRuleFilterComponent implements OnInit {
    selectedValidationRuleGroups: Array<any> = [];
    availableValidationRuleGroups: Array<any> = [];

    constructor() {}

    ngOnInit() {
        this.availableValidationRuleGroups = [
            {
                id          : 'odiGzVETtQQ',
                displayName : 'ANC',
            },
            {
                id          : 'MR53j62xSj5',
                displayName : 'CECAP',
            },
            {
                id          : 'G5e4Yyoildx',
                displayName : 'CECAP_NEW',
            },
            {
                id          : 'NdRWOSO2oGT',
                displayName : 'Child Health',
            },
            {
                id          : 'weV7AEET8ih',
                displayName : 'Delivery',
            },
            {
                id          : 'FUDlbmg7yaw',
                displayName : 'DTC',
            },
            {
                id          : 'Y3Va0UFwhSK',
                displayName : 'Form: Cervical cancer screening and treatment',
            },
            {
                id          : 'Y6MG1Twa4Op',
                displayName : 'Form: HIV Care and treatment reporting form',
            },
            {
                id          : 'mgIfzegPcO2',
                displayName : 'Form: Huduma baada ya kujifungua',
            },
            {
                id          : 'muDkDa2p42d',
                displayName : 'Form: Kliniki ya wajawazito',
            },
            {
                id          : 'umCpkVWXw4x',
                displayName : 'Form: Kutoka Wodi Ya Wazazi',
            },
            {
                id          : 'WgozGzAvXPG',
                displayName : 'Form: Magonjwa Ya Kuhara',
            },
            {
                id          : 'YGBzGbzEebS',
                displayName : 'Form: National Malaria control program',
            },
            {
                id          : 'eejYUs0EC05',
                displayName : 'Form: PMTCT MC',
            },
            {
                id          : 'kTxVH6RsNoc',
                displayName : 'Form: PMTCT PCR',
            },
            {
                id          : 'vCfBUpp0SZP',
                displayName : 'Form: Ufuatiliaji wa Watoto',
            },
        ];
    }

    popValidationRuleGroup = (
        validationGroupList: Array<any>,
        validationGroup: any
    ): any => {

        if (!validationGroup) {
          return validationGroupList;
        }

        const selectedValidationRuleIndex: any = _.findIndex(
            validationGroupList,
            (validationRuleGroupItem) =>
                validationRuleGroupItem.id === validationGroup.id
        );

        return selectedValidationRuleIndex !== -1 ? [
          ...validationGroupList.slice(0, selectedValidationRuleIndex),
          ...validationGroupList.slice(selectedValidationRuleIndex + 1),
        ] : validationGroupList;
    };

    pushValidationRuleGroup = (
        validationGroupList: Array<any>,
        validationGroup: any
    ) => {
        if (!validationGroup) {
            return validationGroupList;
        }

        return _.sortBy([...validationGroupList, validationGroup], [(validationGroupItem) => {
          return validationGroupItem.displayName;
        }]);
    }

    onSelectValidationRuleGroup = (validationRuleGroup: any, e) => {
        e.stopPropagation();

        this.selectedValidationRuleGroups = [
            ...this.selectedValidationRuleGroups,
            validationRuleGroup,
        ];

        this.availableValidationRuleGroups = this.popValidationRuleGroup(
            this.availableValidationRuleGroups,
            validationRuleGroup
        );
    };

    onDeselectValidationRuleGroup = (validationRuleGroup: any, e) => {
        e.stopPropagation();

        this.selectedValidationRuleGroups = this.popValidationRuleGroup(
            this.selectedValidationRuleGroups,
            validationRuleGroup
        );

        this.availableValidationRuleGroups = this.pushValidationRuleGroup(
            this.availableValidationRuleGroups,
            validationRuleGroup
        );
    }
}
