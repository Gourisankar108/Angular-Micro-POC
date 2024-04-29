import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  standalone: true,
  providers: [CommonModule],
})
export class ComponentA {
  @Input() content!: string
}
