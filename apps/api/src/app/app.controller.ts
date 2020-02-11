import { Controller, Get } from '@nestjs/common';

import { Message, Product } from '@shannons-shops/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('Products')
  getProducts(): Promise<Product[]> {
    return this.appService.getProducts();
  }
}
