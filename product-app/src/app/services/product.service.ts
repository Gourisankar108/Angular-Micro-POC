import { Injectable } from '@angular/core';
import { HttpService } from './utility/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpService: HttpService,
  ) { }

  getAllProducts(search?: string) {
    const searchquery = search?'/search?q=' + search : ''
    return this.httpService.get('products' + searchquery);
  }


}
