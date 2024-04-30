import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  searchitem = '';
  selectedProduct='';

  constructor(public router: Router) {
    window.addEventListener("remoteProductSelect", (e: any) => {
      this.selectedProduct = e.detail;
    })
  }

  handleProductSearch() {
    const customEvent = new CustomEvent("hostSearchEvent", { detail: this.searchitem });
    window.dispatchEvent(customEvent);

    setTimeout(() => {
      this.router.navigate(['product']);
    }, 1000);
  }

  resetProductSearch(){
    this.searchitem = '';
    this.handleProductSearch();
  }

}
