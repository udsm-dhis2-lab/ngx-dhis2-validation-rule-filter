import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxDhis2ValidationRuleFilterService {

  constructor(private httpClient: NgxDhis2HttpClientService) { }

  getValidationRuleGroups = (): Observable<any> => {
      return this.httpClient.get('validationRuleGroups.json');
  }
}
