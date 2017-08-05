import { Component, OnInit } from '@angular/core';

import { Headers, Http, Jsonp } from '@angular/http';

import { AttributeDto } from '../../dto/attribute-dto';
import { AccountbookDto } from '../../dto/accountbook-dto';

import { DatePipe } from '@angular/common';

import { AttributeListService } from '../../service/attribute-list.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-p02-entry',
  templateUrl: './p02-entry.component.html',
  // styleUrls: ['./p02-entry.component.scss']
})
export class P02EntryComponent implements OnInit {

  attrListO: AttributeDto[];
  accountbookDto: AccountbookDto;
  constructor(
    private http: Http,
    private datePipe: DatePipe,
    private jsonp: Jsonp,
    private attributeListService: AttributeListService
  ) {
    this.attrListO = [{ kanjoType3_cd: '0000', attributeName: '現金', sortKey: 0 }];
    this.clear();
  }
  ngOnInit() {
  }
  private clear() {
    this.accountbookDto = new AccountbookDto();
    this.accountbookDto.userId = 'U0058';
    this.accountbookDto.dateYmd = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.accountbookDto.attribute = this.attrListO[0].kanjoType3_cd;
  }
  public entry(clear: boolean, list: boolean): void {
    this.accountbookDto.furikaeKbn = this.accountbookDto.attribute + '0000';
    this.attributeListService.insert(this.accountbookDto).subscribe(aa => alert('ok'));
  }
}
