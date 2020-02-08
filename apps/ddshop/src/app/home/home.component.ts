import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'shannons-shops-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hello$ = this.http.get<Message>('/api/hello');
  siteTitle: string;
  constructor(private http: HttpClient) {
    this.siteTitle = environment.storeName;
  }
}
