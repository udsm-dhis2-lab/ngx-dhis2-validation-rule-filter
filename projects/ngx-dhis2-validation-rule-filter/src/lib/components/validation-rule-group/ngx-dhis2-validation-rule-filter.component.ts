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
  getValidationRuleGroupsReloaded,
} from '../../store/selectors/validation-rule-groups.selectors';
@Component({
  selector: 'lib-ngx-dhis2-validation-rule-filter',
  templateUrl: './ngx-dhis2-validation-rule-filter.component.html',
  styleUrls: ['./ngx-dhis2-validation-rule-filter.component.css'],
})
export class NgxDhis2ValidationRuleFilterComponent implements OnInit {
  selectedValidationRuleGroups: Array<any> = [];
  availableValidationRuleGroups: Array<{ name: string; id: string }>;
  periodTypes: Array<string>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  reloaded$: Observable<boolean>;
  periodTypes$: Observable<Array<string>>;

  loadingMessage;

  @Input() dataSelection: Array<string>;
  @Output() update = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loadingMessage = 'Loading Validation...';
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

    this.selectedValidationRuleGroups = [
      ...this.selectedValidationRuleGroups,
      validationRuleGroup,
    ];

    this.availableValidationRuleGroups = this.popValidationRuleGroup(
      this.availableValidationRuleGroups,
      validationRuleGroup
    );
  }

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
      periodTypes: this.periodTypes,
      dimension: 'vrg',
      changed: true,
    };
  }

  onSelectAllValidationRuleGroup = e => {
    e.stopPropagation();
    if (this.selectedValidationRuleGroups.length > 0) {
      this.selectedValidationRuleGroups = _.sortBy(
        [
          ...this.selectedValidationRuleGroups,
          ...this.availableValidationRuleGroups,
        ],
        ['displayName']
      );
    } else {
      this.selectedValidationRuleGroups = this.availableValidationRuleGroups;
    }
    this.availableValidationRuleGroups = [];
  }

  onDeselectAllValidationRuleGroup = e => {
    e.stopPropagation();
    if (this.availableValidationRuleGroups.length > 0) {
      this.availableValidationRuleGroups = _.sortBy(
        [
          ...this.availableValidationRuleGroups,
          ...this.selectedValidationRuleGroups,
        ],
        ['displayName']
      );
    } else {
      this.availableValidationRuleGroups = this.selectedValidationRuleGroups;
    }
    this.selectedValidationRuleGroups = [];
  }
}
