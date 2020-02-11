import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'shannons-shops-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  siteTitle: string;

  constructor() {
    this.siteTitle = environment.storeName;
  }
}
