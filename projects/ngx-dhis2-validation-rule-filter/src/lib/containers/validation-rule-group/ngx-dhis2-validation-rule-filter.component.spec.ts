import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDhis2ValidationRuleFilterComponent } from './ngx-dhis2-validation-rule-filter.component';

describe('NgxDhis2ValidationRuleFilterComponent', () => {
  let component: NgxDhis2ValidationRuleFilterComponent;
  let fixture: ComponentFixture<NgxDhis2ValidationRuleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDhis2ValidationRuleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDhis2ValidationRuleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
