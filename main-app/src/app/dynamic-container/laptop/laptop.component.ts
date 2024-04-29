import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent {
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
