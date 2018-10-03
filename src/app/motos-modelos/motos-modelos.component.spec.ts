import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosModelosComponent } from './motos-modelos.component';

describe('MotosModelosComponent', () => {
  let component: MotosModelosComponent;
  let fixture: ComponentFixture<MotosModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
