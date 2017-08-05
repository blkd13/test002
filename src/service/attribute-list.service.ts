import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AccountbookDto } from '../dto/accountbook-dto';
import { AttributeDto } from '../dto/attribute-dto';
// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AttributeListService {

  private baseUrl = '/test002/api/Accountbook/';  // URL to web api
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  accountBookList(): Observable<AccountbookDto[]> {
    return this.http.get(this.baseUrl + 'meisai')
      .map(response => response.json() as AccountbookDto[])
      .catch(this.handleError);
  }
  attributeList(): Observable<AttributeDto[]> {
    const list: AttributeDto[] = [];
    list.push({ kanjoType3_cd: '0000', attributeName: '現金', sortKey: 0 });
    list.push({ kanjoType3_cd: '0001', attributeName: 'その他', sortKey: 1 });
    list.push({ kanjoType3_cd: '0002', attributeName: '何か', sortKey: 2 });
    list.push({ kanjoType3_cd: '0003', attributeName: '適当', sortKey: 3 });
    list.push({ kanjoType3_cd: '0004', attributeName: 'テスト', sortKey: 4 });
    return Observable.create(list);
    // return this.http.get('./test002/app/AttributeList')
    //   .map(response => response.json() as AttributeDto[])
    //   .catch(this.handleError);
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
