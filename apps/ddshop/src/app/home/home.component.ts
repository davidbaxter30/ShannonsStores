import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@shannons-shops/api-interfaces';
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
