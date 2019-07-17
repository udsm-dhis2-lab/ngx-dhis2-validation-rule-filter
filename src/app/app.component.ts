import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-dhis2-validation-rule-filter-library';

  selectedValidationRuleGroup: any;
  action: any;
  dataElements: Array<string>;

  editorOptions: JsonEditorOptions;
  initialConfiguration;
  data: any;
  @ViewChild(JsonEditorComponent, {}) editor: JsonEditorComponent;

  ngOnInit() {
    this.dataElements = [
      'NQUI9v85csU',
      'SQ7kqkZkEwV',
      'Lnf095vgahq',
      'Lnf095vgahq',
      'Lnf095vgahq',
    ];

    this.selectedValidationRuleGroup = {
      items: [],
      periodTypes: [],
      dimension: {},
      changed: false
    }
  }

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code'];
    // this.options.mode = 'code'; //set only one mode
    // Options to be added here: ['code', 'text', 'tree', 'view']
  }

  onUpdateValidationRule = (selectedValidationRuleGroup, action?) => {
    this.selectedValidationRuleGroup = selectedValidationRuleGroup;
    this.action = action;
  }

  getContent = (data) => {
    console.log('BOBO::: ' + JSON.stringify(data.value));
    this.dataElements = [data];
  }
}
