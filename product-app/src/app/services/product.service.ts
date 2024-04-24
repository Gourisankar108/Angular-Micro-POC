import { Injectable } from '@angular/core';
import { HttpService } from './utility/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpService: HttpService,
  ) { }

  getAllProducts() {
    return this.httpService.get('products');
  }
}
