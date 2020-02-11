import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shannons-shops/api-interfaces';

@Component({
  selector: 'shannons-shops-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
