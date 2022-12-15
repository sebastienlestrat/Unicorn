import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglelogoComponent } from './googlelogo.component';

describe('GooglelogoComponent', () => {
  let component: GooglelogoComponent;
  let fixture: ComponentFixture<GooglelogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglelogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooglelogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
