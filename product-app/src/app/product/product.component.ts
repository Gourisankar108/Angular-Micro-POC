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
  searchtext = '';
  constructor(
    private productService: ProductService,
    private loaderService: LoaderService
  ) {
    window.addEventListener("controlRemoteCounter", (e: any) => {
      this.getAllProducts(e?.detail)
    })
  }
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts(search?: string) {
    this.loaderService.show();
    this.productService.getAllProducts(search).subscribe((response: any) => {
      this.loaderService.hide();
      console.log(response)
      this.products = response.products;
    }, (err) => {
      this.loaderService.hide();
      console.error(err.error.message);
    })
  }

  searchProduct() {
    this.getAllProducts(this.searchtext)
  }
  resetProductSearch() {
    this.searchtext = '';
    this.getAllProducts(this.searchtext)
  }
}
