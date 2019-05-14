import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRuleFilterComponent } from './validation-rule-filter.component';

describe('ValidationRuleFilterComponent', () => {
  let component: ValidationRuleFilterComponent;
  let fixture: ComponentFixture<ValidationRuleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationRuleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRuleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
