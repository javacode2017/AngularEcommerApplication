import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
       {path:'order',component:ListOrdersComponent} 
      
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
