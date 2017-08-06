import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule, DatePipe } from '@angular/common';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { P00RootPageComponent } from '../pages/p00-root-page/p00-root-page.component';
import { P01LoginComponent } from '../pages/p01-login/p01-login.component';
import { P02EntryComponent } from '../pages/p02-entry/p02-entry.component';
import { P03DefaultComponent } from '../pages/p03-default/p03-default.component';
import { P04DataComponent } from '../pages/p04-data/p04-data.component';
import { P05ListComponent } from '../pages/p05-list/p05-list.component';
import { P06SummaryComponent } from '../pages/p06-summary/p06-summary.component';
import { AttributeListService } from '../service/attribute-list.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    P00RootPageComponent,
    P01LoginComponent,
    P02EntryComponent,
    P03DefaultComponent,
    P04DataComponent,
    P05ListComponent,
    P06SummaryComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    NgxDatatableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    P00RootPageComponent,
    P01LoginComponent,
    P02EntryComponent,
    P03DefaultComponent,
    P04DataComponent,
    P05ListComponent,
    P06SummaryComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatePipe,
    AttributeListService
  ]
})
export class AppModule { }
