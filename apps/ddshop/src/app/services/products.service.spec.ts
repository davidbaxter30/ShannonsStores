import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ProductsService } from './products.service';
import { environment } from '@ddshop/environment';

export const expectedProducts = [
  {
    image: 'testImage',
    name: 'testName',
    id: 'testId',
    price: 3292,
    description: 'I\'m a description',
    body: 'body here'
  },
  {
    image: 'testImage2',
    name: 'testName2',
    id: 'testId2',
    price: 3293,
    description: 'I\'m a description2',
    body: 'body here2'
  }
];

describe('ProductsService', () => {
  const _apiUrl = environment.apiUrl;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  it('should call getAllProducts and get test data.', () => {
    const service: ProductsService = TestBed.inject(ProductsService);
    service.getAllProducts().subscribe(data => {
      expect(data).toBe(expectedProducts);
    });
    
    const req = httpTestingController.expectOne(`${_apiUrl}/Products`);
    const { request } = req;

    expect(request.headers.get('Content-Type')).toBe('application/json');
    expect(request.method).toBe('GET');

    req.flush(expectedProducts);
    expect(service).toBeTruthy();
  });
});
