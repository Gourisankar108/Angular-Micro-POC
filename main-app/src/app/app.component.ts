import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-app';

  // @ViewChild('formComponent', { read: ViewContainerRef })
  // formComponent!: ViewContainerRef;

  // async loadComponent() {
  //   const { RemoteEntryComponent } = await import('search-app/SearchModule');

  //   this.formComponent.clear();
  //   this.formComponent.createComponent(RemoteEntryComponent);
  // }
}
