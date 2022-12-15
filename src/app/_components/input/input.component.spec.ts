import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


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

