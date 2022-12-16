import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input() className: string = '';
  // @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.className);
  }

  // actionEnvoi() {
  //   this.clickEmitter.emit();
  // }

}
