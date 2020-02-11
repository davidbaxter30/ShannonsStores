
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];