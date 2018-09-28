import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDetalhesComponent } from './moto-detalhes.component';

describe('MotoDetalhesComponent', () => {
  let component: MotoDetalhesComponent;
  let fixture: ComponentFixture<MotoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
