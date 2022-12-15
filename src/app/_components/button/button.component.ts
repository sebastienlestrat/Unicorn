import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() className!: string;
  @Input() icon!: string;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
