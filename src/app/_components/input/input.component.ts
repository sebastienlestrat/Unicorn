import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  // Parent => Fils
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() type: string = 'text';

  // Fils => Parent
  @Output() inputValueEmitter: EventEmitter<string> = new EventEmitter<string>();
  isPassword!: boolean;

  ngOnInit () {
    this.isPassword = this.type == 'password';
  }
}


// import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-input',
//   templateUrl: './input.component.html',
//   styleUrls: ['./input.component.scss']
// })
// export class InputComponent implements OnInit{
//   @Input() label!:string;
//   @Input() placeholder!:string;
//   @Input() type:string = 'text';
//   @Output() value:EventEmitter<string> = new EventEmitter<string>();
//   isPassword!: boolean;

//   constructor() {}

//   ngOnInit(): void {
//     this.isPassword = this.type == 'password';
//   }

//   togglePassword() {
//     this.type = this.type == 'password' ? 'text' : 'password';
//   }
// }