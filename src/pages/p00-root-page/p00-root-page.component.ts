import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-p00-root-page',
  templateUrl: './p00-root-page.component.html',
  // styleUrls: ['./p00-root-page.component.scss']
})
export class P00RootPageComponent implements OnInit {

  constructor(protected location: Location) { }

  ngOnInit() {
  }
}
