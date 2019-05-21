import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dhis2-validation-rule-filter-library';

  selectedValidationRuleGroup: any;
  action: any;
  dataElements: Array<string>;

  ngOnInit() {
    this.dataElements = [
      'NQUI9v85csU',
      'SQ7kqkZkEwV',
      'Lnf095vgahq',
      'Lnf095vgahq',
      'Lnf095vgahq'
    ];
  }

  onUpdateValidationRule = (selectedValidationRuleGroup, action?) => {
    this.selectedValidationRuleGroup = selectedValidationRuleGroup;
    this.action = action;
  }
}
