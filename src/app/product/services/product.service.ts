import { IProduct } from './../interfaces/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  private MyProducts: IProduct[] = [];

  constructor() {}

  public getMyProducts(): IProduct[] {
    return this.MyProducts;
  }
  public addProduct ( model: IProduct ): IProduct[]
  {
    debugger;
    var result = this.MyProducts.map(function (a) {
      return a.Id;
    } );
    if ( result.length > 0 )
    {      
      var id = Math.max( ...result ) + 1;
      model.Id = id;
    } else
    {
      model.Id = 1;      
    }
    this.MyProducts.push(model);
    return this.MyProducts;
  }

  public editProduct(model: IProduct): IProduct[] {
    var olditem = this.MyProducts.find((x) => x.Id == model.Id) as IProduct;
    var index = this.MyProducts.indexOf(olditem);
    this.MyProducts[index] = model;
    return this.MyProducts;
  }
  public deleteProduct(model: IProduct): IProduct[] {
    var olditem = this.MyProducts.find((x) => x.Id == model.Id) as IProduct;
    var index = this.MyProducts.indexOf(olditem);
    this.MyProducts.splice(index, 1);
    return this.MyProducts;
  }
}
