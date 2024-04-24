import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public spinner$: Subject<any>;

  constructor() {
    this.spinner$ = new Subject<any>();
  }

  show() {
    this.spinner$.next(true);
  }

  hide() {
    this.spinner$.next(false);
  }

  // show() {
  //   const spinnerDiv = document.getElementById("#spinnerDiv") as HTMLElement;
  //   if (spinnerDiv) {
  //     spinnerDiv.classList.remove('hide')
  //   }
  // }

  // hide() {
  //   const spinnerDiv = document.getElementById("#spinnerDiv") as HTMLElement;
  //   if (spinnerDiv) {
  //     spinnerDiv.classList.add('hide')
  //   }
  // }
}
