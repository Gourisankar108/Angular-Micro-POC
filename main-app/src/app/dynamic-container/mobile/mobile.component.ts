import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  @Input() name = '';
  @Output() closed = new EventEmitter<any>();

  ngOnInit() {

  }

  close() {
    this.closed.emit({
      name: this.name,
    })
  }
}
