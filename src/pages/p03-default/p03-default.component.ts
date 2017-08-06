import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RootProvider } from '../../providers/root/root';
import { AttributeListService } from '../../service/attribute-list.service';
import { P02EntryComponent } from '../p02-entry/p02-entry.component';

import { AccountbookDto } from '../../dto/accountbook-dto';

@Component({
  selector: 'app-p03-default',
  templateUrl: './p03-default.component.html',
  // styleUrls: ['./p03-default.component.scss']
})
export class P03DefaultComponent implements OnInit, AfterViewInit {
  @ViewChild('updTpl')
  updTpl: ElementRef;
  @ViewChild('numTpl')
  numTpl: ElementRef;

  column: any[];
  data: AccountbookDto[];
  loading: boolean;

  constructor(
    private navCtrl: NavController,
    private root: RootProvider,
    private accountBookList: AttributeListService
  ) {
    this.loading = true
    accountBookList.accountBookList().subscribe(
      ret => {
        this.data = ret;
        this.loading = false;
      });
  }
  public upd(rowObj: AccountbookDto) {
    RootProvider.map(rowObj, this.root.accountbookDto);
    this.navCtrl.push(P02EntryComponent);
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.column = [
      { prop: 'dateYmd', name: '年月日', width: 80 },
      { prop: 'attribute', name: '種別', width: 50 },
      { prop: 'amount', name: '金額', width: 65, cellTemplate: this.numTpl },
      { prop: 'content', name: '品目', width: 120 },
      { prop: 'detail', name: '詳細', width: 120 },
      { prop: 'withwho', name: '誰と', width: 60 },
      { prop: 'serialNo', name: '修正', width: 50, cellTemplate: this.updTpl }
    ];
  }
}
