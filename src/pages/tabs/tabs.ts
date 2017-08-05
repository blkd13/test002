import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { P02EntryComponent } from '../p02-entry/p02-entry.component';
import { P03DefaultComponent } from '../p03-default/p03-default.component';
import { P04DataComponent } from '../p04-data/p04-data.component';
import { P05ListComponent } from '../p05-list/p05-list.component';
import { P06SummaryComponent } from '../p06-summary/p06-summary.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = P02EntryComponent;
  tab2Root = P03DefaultComponent;
  tab3Root = P04DataComponent;
  tab4Root = P05ListComponent;
  tab5Root = P06SummaryComponent;

  constructor() {
  }
}
