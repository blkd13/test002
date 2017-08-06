import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AccountbookDto } from '../dto/accountbook-dto';
import { AttributeDto } from '../dto/attribute-dto';
import { SummaryDto } from '../dto/summary-dto';
// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Const } from '../const/Const';

@Injectable()
export class AttributeListService {
  constructor(private http: Http) { }
  accountBookList(): Observable<AccountbookDto[]> {
    return this.http.get(Const.BASE_URL + '/api/Accountbook/meisai?userId=U0058')
    // return this.http.get('assets/data/accountbookList.json')
      .map(response => response.json() as AccountbookDto[])
      .catch(this.handleError);
  }
  summaryList(): Observable<SummaryDto[]> {
    return this.http.get(Const.BASE_URL + '/api/Accountbook/summary?userId=U0058')
    // return this.http.get('assets/data/summaryList.json')
      .map(response => response.json() as SummaryDto[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  insert(param: AccountbookDto): Observable<any> {
    return this.http.post('/test002/api/Accountbook', param)
      .map(response => response.json() as AttributeDto[])
      .catch(this.handleError);
  }
}
