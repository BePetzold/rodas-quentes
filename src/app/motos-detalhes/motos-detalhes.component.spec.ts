import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosDetalhesComponent } from './motos-detalhes.component';

describe('MotosDetalhesComponent', () => {
  let component: MotosDetalhesComponent;
  let fixture: ComponentFixture<MotosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
