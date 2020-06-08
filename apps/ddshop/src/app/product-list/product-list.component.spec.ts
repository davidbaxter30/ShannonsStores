import { ProductsService } from './../services/products.service';
import { Product } from '@shannons-shops/api-interfaces';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { expectedProducts } from '../services/products.service.spec';

// setup stubs for this component 
@Component({ selector: 'shannons-shops-products-list-item', template: '{{ product.id }}' })
class ProductListItemStubComponent {
  @Input() product: Product;
}

// setup mock inputs for this component

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productList: HTMLElement;

  const getAllProductsSpy = jest.fn();
  getAllProductsSpy.mockReturnValue(of(expectedProducts));
  const productsService = {
    getAllProducts: getAllProductsSpy
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductListItemStubComponent],
      providers: [
        { provide: ProductsService, useValue: productsService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productList = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product list.', () => {

    expect(component.products).toBe(expectedProducts);

    expect(productList.textContent).toContain(expectedProducts[0].id);
    expect(productList.textContent).toContain(expectedProducts[1].id);

  });

  it('show loading while loading', () => {
    component.loading = true;
    fixture.detectChanges();

    expect(productList.textContent).toContain('Loading products...');
  });
});
