import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'shannons-shops-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title: string;

  constructor() {
    this.title = environment.storeName;
  }

  ngOnInit() {
  }

}
