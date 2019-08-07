import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../store/reducers/validation-rule-groups.reducers';
import { LoadValidationRuleGroups } from '../../store/actions/validation-rule-groups.actions';
import {
  getAllValidationRuleGroups,
  getValidationRuleGroupsLoaded,
  getValidationRuleGroupsLoading,
  getValidationRulePeriodTypes,
} from '../../store/selectors/validation-rule-groups.selectors';

import { Fn } from '@iapps/function-analytics';
import { PeriodTypes } from '../../models/period-types.model';

@Component({
  selector: 'lib-ngx-dhis2-validation-rule-filter',
  templateUrl: './ngx-dhis2-validation-rule-filter.component.html',
  styleUrls: ['./ngx-dhis2-validation-rule-filter.component.css'],
})
export class NgxDhis2ValidationRuleFilterComponent implements OnInit {
  selectedValidationRuleGroups: Array<any> = [];
  availableValidationRuleGroups: Array<{ name: string; id: string }>;
  periodTypes: Array<string>;
  searchString: string;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  reloaded$: Observable<boolean>;
  periodTypes$: Observable<Array<string>>;
  currentPageAvailable = 1;
  currentPageSelected = 1;
  totalAvailableItems = 0;

  @Input() dataSelection: Array<string>;
  @Input() selectedVRGs: Array<string>;
  @Output() update = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.currentPageAvailable = 1;
    this.store.select(getAllValidationRuleGroups);
    this.store.dispatch(new LoadValidationRuleGroups(this.dataSelection));
    this.store
      .select(getAllValidationRuleGroups)
      .subscribe((state: Array<{ name: string; id: string }>) => {
        state
          ? (this.availableValidationRuleGroups = state)
          : (this.availableValidationRuleGroups = []);
      });
    this.loaded$ = this.store.select(getValidationRuleGroupsLoaded);
    this.loading$ = this.store.select(getValidationRuleGroupsLoading);
    this.periodTypes$ = this.store.select(getValidationRulePeriodTypes);
    this.periodTypes$.subscribe((periods: Array<string>) => {
      this.periodTypes = periods;
    });

    this.totalAvailableItems = this.availableValidationRuleGroups.length;

    if (this.selectedVRGs) {
      this.selectedValidationRuleGroups = _.uniqBy(
        [...this.selectedValidationRuleGroups, ...this.selectedVRGs],
        'id'
      );
    }
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
      validationRuleGroupItem =>
        validationRuleGroupItem.id === validationGroup.id
    );

    return selectedValidationRuleIndex !== -1
      ? [
          ...validationGroupList.slice(0, selectedValidationRuleIndex),
          ...validationGroupList.slice(selectedValidationRuleIndex + 1),
        ]
      : validationGroupList;
  }

  pushValidationRuleGroup = (
    validationGroupList: Array<any>,
    validationGroup: any
  ) => {
    if (!validationGroup) {
      return validationGroupList;
    }

    return _.sortBy(
      [...validationGroupList, validationGroup],
      [
        validationGroupItem => {
          return validationGroupItem.displayName;
        },
      ]
    );
  }

  onSelectValidationRuleGroup = (validationRuleGroup: any, e) => {
    e.stopPropagation();

    this.selectedValidationRuleGroups = _.uniqBy(
      [...this.selectedValidationRuleGroups, validationRuleGroup],
      'id'
    );

    this.availableValidationRuleGroups = _.uniqBy(
      this.popValidationRuleGroup(
        this.availableValidationRuleGroups,
        validationRuleGroup
      ),
      'id'
    );
  }

  onDeselectValidationRuleGroup = (validationRuleGroup: any, e) => {
    e.stopPropagation();

    this.selectedValidationRuleGroups = _.uniqBy(
      this.popValidationRuleGroup(
        this.selectedValidationRuleGroups,
        validationRuleGroup
      ),
      'id'
    );

    this.availableValidationRuleGroups = _.uniqBy(
      this.pushValidationRuleGroup(
        this.availableValidationRuleGroups,
        validationRuleGroup
      ),
      'id'
    );
  }

  onClose = e => {
    e.stopPropagation();
    this.close.emit(this.getValidationRuleSelection());
  }

  onUpdate = e => {
    e.stopPropagation();
    this.update.emit(this.getValidationRuleSelection());
  }

  getValidationRuleSelection = () => {
    return {
      items: this.selectedValidationRuleGroups,
      periodType: this.getLeastPossiblePeriod(this.periodTypes),
      dimension: 'vrg',
      changed: true,
    };
  }

  getLeastPossiblePeriod(periods: Array<string>) {
    const filteredPeriodTypes = this.getPeriodTypesBasedOnDataSelection(
      this.periodTypes
    );
    const sortedPeriods = this.getSortedPeriodTypes(filteredPeriodTypes);
    return this.getLowestPeriodType(sortedPeriods)
      ? this.getLowestPeriodType(sortedPeriods)
      : {
          id: 'Monthly',
          name: 'Monthly',
          rank: 3,
        };
  }

  getPeriodTypesBasedOnDataSelection(periods: Array<string>) {
    const periodsMappers: Array<PeriodTypes> = new Fn.PeriodType().get();
    const filteredPeriodTypes: Array<PeriodTypes> = [];

    if (periods) {
      _.forEach(periods, period => {
        if (period) {
          _.forEach(periodsMappers, (periodsMapper: PeriodTypes) => {
            if (periodsMapper.name === period) {
              filteredPeriodTypes.push(periodsMapper);
            }
          });
          return filteredPeriodTypes ? filteredPeriodTypes : [];
        }
      });
    }
    return filteredPeriodTypes ? filteredPeriodTypes : [];
  }

  getSortedPeriodTypes(periods: Array<PeriodTypes>) {
    if (periods) {
      return _.orderBy(periods, 'rank', 'asc');
    }
  }

  getLowestPeriodType(periods: Array<PeriodTypes>) {
    if (periods) {
      return _.first(periods);
    }
  }

  onSelectAllValidationRuleGroup = e => {
    e.stopPropagation();
    if (this.selectedValidationRuleGroups.length > 0) {
      this.selectedValidationRuleGroups = _.uniqBy(
        _.sortBy(
          [
            ...this.selectedValidationRuleGroups,
            ...this.availableValidationRuleGroups,
          ],
          ['displayName']
        ),
        'id'
      );
    } else {
      this.selectedValidationRuleGroups = _.uniqBy(
        this.availableValidationRuleGroups,
        'id'
      );
    }
    this.availableValidationRuleGroups = [];
  }

  onDeselectAllValidationRuleGroup = e => {
    e.stopPropagation();
    if (this.availableValidationRuleGroups.length > 0) {
      this.availableValidationRuleGroups = _.uniqBy(
        _.sortBy(
          [
            ...this.availableValidationRuleGroups,
            ...this.selectedValidationRuleGroups,
          ],
          ['displayName']
        ),
        'id'
      );
    } else {
      this.availableValidationRuleGroups = _.uniqBy(
        this.selectedValidationRuleGroups,
        'id'
      );
    }
    this.selectedValidationRuleGroups = [];
  }

  onAvailablePageChanged = e => {
    e ? (this.currentPageAvailable = e) : (this.currentPageAvailable = 1);
  }

  onSelectedPageChanged = e => {
    e ? (this.currentPageSelected = e) : (this.currentPageSelected = 1);
  }
}
