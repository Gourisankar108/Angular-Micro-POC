import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  searchitem = '';
  constructor(public router: Router) {
  }

  handleProductSearch() {
    const customEvent = new CustomEvent("controlRemoteCounter", { detail: this.searchitem });
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
