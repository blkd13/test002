import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-p01-login',
  templateUrl: './p01-login.component.html',
  // styleUrls: ['./p01-login.component.scss']
})
export class P01LoginComponent implements OnInit {

  id: string;
  passwd: string;
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }
  login(): void {
    // FB.getLoginStatus(function (response) { statusChangeCallback(response); });
    // this.http.post('/test002/app/login', { id: this.id, passwd: this.passwd }).subscribe();
  }
}
