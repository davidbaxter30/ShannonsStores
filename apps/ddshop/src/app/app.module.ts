import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { environment } from '@environment/ddshop';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, PageNotFoundComponent, ProductListComponent, ProductsListItemComponent, ProductsPageComponent],
  imports: [BrowserModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
