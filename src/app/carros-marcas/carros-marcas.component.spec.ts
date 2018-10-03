import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosMarcasComponent } from './carros-marcas.component';

describe('CarrosMarcasComponent', () => {
  let component: CarrosMarcasComponent;
  let fixture: ComponentFixture<CarrosMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
