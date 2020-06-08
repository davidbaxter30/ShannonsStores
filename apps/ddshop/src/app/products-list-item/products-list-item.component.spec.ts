import { expectedProducts } from './../services/products.service.spec';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListItemComponent } from './products-list-item.component';

describe('ProductsListItemComponent', () => {
  let component: ProductsListItemComponent;
  let fixture: ComponentFixture<ProductsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListItemComponent);
    component = fixture.componentInstance;
    component.product = expectedProducts[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.product).toBe(expectedProducts[0]);
  });
});
