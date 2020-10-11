import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  {path:'create-product',component:CreateProductComponent},
  {path:'delete-product',component:DeleteProductComponent},
  {path:'update-product',component:UpdateProductsComponent},
  {path:'view-products-by-category',component:ViewAllProductsByCategoryComponent},
  {path:'view-product-by-date',component:ViewAllProductsByDateComponent},
  //{path:'view-all-product',component:ViewAllProductsComponent},
  {path:'view-product',component:ViewProductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
