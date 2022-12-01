import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesinputComponent } from './eyesinput.component';

describe('EyesinputComponent', () => {
  let component: EyesinputComponent;
  let fixture: ComponentFixture<EyesinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyesinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
