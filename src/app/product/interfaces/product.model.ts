import { ProductType } from './../enums/productType.enum';

export interface IProduct {
  Id: number;
  Name: string;
  Description: string;
  Amount: number;
  ProductType:ProductType;
}