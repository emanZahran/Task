import { ButtonModule } from 'primeng/button';
import { ProductsService } from './services/product.service';
import { ListProductsComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './manage-products.routing';
import { ManageProductsComponent } from './manage_products.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  exports: [],
  declarations: [ManageProductsComponent, ListProductsComponent],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [ManageProductsComponent],
})
export class ManageProductsModule {}
