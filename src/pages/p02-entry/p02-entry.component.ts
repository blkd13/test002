import { Component, OnInit } from '@angular/core';

import { Headers, Http, Jsonp } from '@angular/http';

import { AttributeDto } from '../../dto/attribute-dto';
import { AccountbookDto } from '../../dto/accountbook-dto';

import { DatePipe } from '@angular/common';

import { AttributeListService } from '../../service/attribute-list.service';
import { RootProvider } from '../../providers/root/root';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-p02-entry',
  templateUrl: './p02-entry.component.html',
  // styleUrls: ['./p02-entry.component.scss']
})
export class P02EntryComponent implements OnInit {

  constructor(
    public root: RootProvider
  ) {
  }
  ngOnInit() {
  }
  public entry(clear: boolean, list: boolean): void {
    this.root.accountbookDto.furikaeKbn = this.root.accountbookDto.attribute + '0000';
    
  }
}
