import { TestBed } from '@angular/core/testing';

import { NgxDhis2ValidationRuleFilterService } from './ngx-dhis2-validation-rule-filter.service';

describe('NgxDhis2ValidationRuleFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDhis2ValidationRuleFilterService = TestBed.get(NgxDhis2ValidationRuleFilterService);
    expect(service).toBeTruthy();
  });
});
