import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhaoDetalhesComponent } from './caminhao-detalhes.component';

describe('CaminhaoDetalhesComponent', () => {
  let component: CaminhaoDetalhesComponent;
  let fixture: ComponentFixture<CaminhaoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhaoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
