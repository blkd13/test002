import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { RootProvider } from '../../providers/root/root';
import { AttributeListService } from '../../service/attribute-list.service';
import { SummaryDto } from '../../dto/summary-dto';

@Component({
  selector: 'app-p04-data',
  templateUrl: './p04-data.component.html',
  // styleUrls: ['./p04-data.component.scss']
})
export class P04DataComponent implements OnInit {
  @ViewChild('updTpl')
  updTpl: ElementRef;
  @ViewChild('numTpl')
  numTpl: ElementRef;

  column: any[];
  data: SummaryDto[];

  constructor(
    private root: RootProvider,
    private accountBookList: AttributeListService
  ) {
    accountBookList.summaryList().subscribe(res => this.data = res);
  }

  ngOnInit() {
    this.column = [
      { prop: 'userId', name: 'userId', width: 50 },
      { prop: 'dateYm', name: 'dateYm', width: 60 },
      { prop: '食費', name: '食費', width: 80, cellTemplate: this.numTpl },
      { prop: '交際費', name: '交際費', width: 80, cellTemplate: this.numTpl },
      { prop: '贅沢費', name: '贅沢費', width: 80, cellTemplate: this.numTpl },
      { prop: '雑費', name: '雑費', width: 80, cellTemplate: this.numTpl },
      { prop: '小計１', name: '小計１', width: 80, cellTemplate: this.numTpl },
      { prop: '経費', name: '経費', width: 80, cellTemplate: this.numTpl },
      { prop: '光熱費', name: '光熱費', width: 80, cellTemplate: this.numTpl },
      { prop: '固定費', name: '固定費', width: 80, cellTemplate: this.numTpl },
      { prop: '小計２', name: '小計２', width: 80, cellTemplate: this.numTpl },
      { prop: '合計', name: '合計', width: 80, cellTemplate: this.numTpl },
    ];
  }
}
