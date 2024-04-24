import { Component } from '@angular/core';
import { LoaderService } from './services/utility/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app';
  showSpinner = false;
  constructor(private loaderService: LoaderService){
    this.loaderService.spinner$.subscribe((data: boolean) => {
      setTimeout(() => {
        this.showSpinner = data ? data : false;
      });
      console.log(this.showSpinner);
    });
  }
}
