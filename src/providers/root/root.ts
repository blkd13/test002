import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DatePipe } from '@angular/common';

import { AccountbookDto } from '../../dto/accountbook-dto';
import { AttributeDto } from '../../dto/attribute-dto';

/*
  Generated class for the CommonDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RootProvider {

  attrList: AttributeDto[];
  accountbookDto: AccountbookDto;

  public static genIndex(p0: number, p1: number = null, step: number = null): number[] {
    const list = [];
    let start: number;
    let end: number;
    if (step === null) {
      if (p1 === null) {
        start = 0;
        end = p0 - 1;
        step = 1;
      } else {
        start = p0;
        end = p1;
        step = p0 < p1 ? 1 : -1;
      }
    } else {
      start = p0;
      end = p1;
    }
    for (let idx = start; idx <= end; idx += step) {
      list.push(idx);
    }
    return list;
  }
  /**
   * オブジェクトマッピング処理<br />
   * 指定されたクラスにターゲットオブジェクトより値をマッピングして返却する。<br />
   * @param resultClass マッピングするクラス
   * @param target マッピング元のオブジェクト
   * @param firstSort firstSortモード（true：内部的に初期データ順保持のための連番を付与する、false：連番を付与しない[高速]）
   */
  public static map(src: any, dest: any, firstSort: Boolean = true): void {
    if (typeof (src) === 'object') {
      let properties: string[];
      properties = Object.getOwnPropertyNames(src);
      for (let prop of properties) {
        if (typeof (src[prop]) === 'object') {
          if (src[prop] === null) {
            dest[prop] = null;
          } else {
            if (dest[prop]) {
            } else {
              // destがnullの場合
              dest[prop] = {};
            }
            RootProvider.map(src, dest, firstSort);
          }
        } else {
          dest[prop] = src[prop];
        }
      }
    } else if (dest) {
      dest = src;
    } else {
      // null
    }
  }

  constructor(
    private http: Http,
    private datePipe: DatePipe
  ) {
    this.attrList = [new AttributeDto()];
    this.accountbookDto = new AccountbookDto();
  }
  loadInit(): Observable<AttributeDto[]> {
    // return this.http.get('./test002/app/AttributeList')
    return this.http.get('assets/data/attrList.json')
      .map(response => {
        this.attrList = response.json() as AttributeDto[];
        this.clearAccountbookDto(this.accountbookDto);
        return this.attrList;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public clearAccountbookDto(accountbookDto): void {
    const tmp = new AccountbookDto();
    tmp.amount = null;
    tmp.attribute = this.attrList[0].kanjoType3Name;
    tmp.content = null;
    tmp.dateYmd = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    tmp.deleteKbn = null;
    tmp.detail = null;
    tmp.furikaeKbn = null;
    tmp.insertTs = null;
    tmp.insertUserId = null;
    tmp.kanjoNo = null;
    tmp.kyouseiKbn = null;
    tmp.serialNo = null;
    tmp.sourceCd = null;
    tmp.sourceSerial = null;
    tmp.torikeshiKbn = null;
    tmp.updateTs = null;
    tmp.updateUserId = null;
    tmp.userId = 'U0058';
    tmp.withwho = null;
    RootProvider.map(tmp, accountbookDto);
  }
}
