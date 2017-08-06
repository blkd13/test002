import { Component, OnInit, TemplateRef } from '@angular/core';

import { AttributeListService } from '../../service/attribute-list.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { Observable } from 'rxjs/Rx';

import { AccountbookDto } from '../../dto/accountbook-dto';

@Component({
  selector: 'app-p03-default',
  templateUrl: './p03-default.component.html',
  // styleUrls: ['./p03-default.component.scss']
})
export class P03DefaultComponent implements OnInit {

  myGrid: any;
  column: any[] = [
    { prop: 'dateYmd', name: '年月日', width: 80 },
    { prop: 'attribute', name: 'attribute', width: 50 },
    { prop: 'amount', name: '金額', width: 65 },
    { prop: 'content', name: '品目', width: 120 },
    { prop: 'detail', name: '詳細', width: 120 },
    { prop: 'withwho', name: '誰と', width: 60 },
    { prop: 'serialNo', name: '修正', width: 50 }
  ];
  //   { name: 'dateYmd', displayName: 'dateYmd', width: 80, cellTemplate: 'date.html' },
  //   { name: 'attribute', displayName: 'attribute', width: 50 },
  //   { name: 'amount', displayName: 'amount', width: 65, cellTemplate: 'num.html' },
  //   { name: 'content', displayName: 'content', width: 120 },
  //   { name: 'detail', displayName: 'detail', width: 120 },
  //   { name: 'withwho', displayName: 'withwho', width: 60 },
  //   { name: 'serialNo', displayName: 'upd', width: 50, cellTemplate: 'upd.html' }
  // ];
  data: AccountbookDto[];

  constructor(
    private accountBookList: AttributeListService
  ) {
    accountBookList.accountBookList().subscribe(ret => this.data = ret);
  }
  public upd(rowObj: any) {
    // this.rootScope['accrec'] = (<app.dto.AccountbookDto>rowObj.entity);
    // this.rootScope['accrec'].dateYmd = new Date(Date.parse(rowObj.entity.dateYmd));
    // this.state.go('rootPage.entry');
  }

  ngOnInit() {
  }
}
