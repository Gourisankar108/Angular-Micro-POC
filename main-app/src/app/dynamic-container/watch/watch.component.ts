import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent {
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
