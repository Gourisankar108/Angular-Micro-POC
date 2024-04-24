import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { LoaderService } from '../services/utility/loader.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any = [];
  constructor(
    private productService: ProductService,
    private loaderService: LoaderService
  ) {

  }
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.loaderService.show();
    this.productService.getAllProducts().subscribe((response: any) => {
      this.loaderService.hide();
      console.log(response)
      this.products = response.products;
    }, (err) => {
      this.loaderService.hide();
      console.error(err.error.message);
    })
  }
}
