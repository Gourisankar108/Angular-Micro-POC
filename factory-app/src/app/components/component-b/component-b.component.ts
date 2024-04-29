import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  standalone: true,
  providers: [CommonModule]
})
export class ComponentB {
  private _index: number = 0;
  @Output() buttonClicked = new EventEmitter<string>();  

  onButtonClick() {
    this.buttonClicked.emit('emitted : ' + this._index++)
  }
}
