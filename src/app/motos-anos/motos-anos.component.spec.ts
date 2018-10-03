import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosAnosComponent } from './motos-anos.component';

describe('MotosAnosComponent', () => {
  let component: MotosAnosComponent;
  let fixture: ComponentFixture<MotosAnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosAnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosAnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
