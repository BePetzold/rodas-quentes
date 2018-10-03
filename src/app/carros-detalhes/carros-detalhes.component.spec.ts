import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDetalhesComponent } from './carros-detalhes.component';

describe('CarrosDetalhesComponent', () => {
  let component: CarrosDetalhesComponent;
  let fixture: ComponentFixture<CarrosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
