import { ProductType } from './../../enums/productType.enum';
import { ProductsService } from './../../services/product.service';
import { IProduct } from './../../interfaces/product.model';
import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig, SelectItem , } from 'primeng/api';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';


@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListProductsComponent {
  products: IProduct[] = [];
  displayModal: boolean = false;
  myForm: any;
  selectedProduct: any;
  productTypes: SelectItem[] = []; 

  constructor(
    private ProductsService: ProductsService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.products = this.ProductsService.getMyProducts();
    this.productTypes = Object.keys(ProductType).map((key) => ({
      label: key,
      value: key,
    }));
  }
  showModalDialog(product: any = null) {
    this.selectedProduct = product;
    this.createProductForm(this.selectedProduct);
    this.displayModal = true;
  }
  createProductForm(model: IProduct) {
    this.myForm = this.formBuilder.group({
      Id: [model?.Id],
      Name: [
        model?.Name,
        [Validators.required, this.NameValidation.bind(this)],
      ],
      Amount: [model?.Amount, [Validators.required]],
      Description: [model?.Description, [Validators.required]],
      ProductType: [model?.ProductType, [Validators.required]],
    });
  }

  NameValidation(control: FormControl) {
    if (control.value != null && control.value != '') {
      if (
        this.products.filter(
          (x) =>
            x.Name.toLowerCase() == control.value.toLowerCase() &&
            x.Id != this.myForm.controls['Id'].value
        ).length > 0
      ) {
        return { DuplicatedError: true };
      }
    }
    return null;
  }
  add() {
    if (this.myForm.invalid) {
      return;
    }
    var model = this.myForm.value;
    this.products = this.ProductsService.addProduct(model);
    this.displayModal = false;
  }
  edit() {
    var model = this.myForm.value;
    this.products = this.ProductsService.editProduct(model);
    this.displayModal = false;
  }
  deleteProuct(model: any) {
    this.products = this.ProductsService.deleteProduct(model);
  }
}
