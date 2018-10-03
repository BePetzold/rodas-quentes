import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoesDetalhesComponent } from './caminhoes-detalhes.component';

describe('CaminhoesDetalhesComponent', () => {
  let component: CaminhoesDetalhesComponent;
  let fixture: ComponentFixture<CaminhoesDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoesDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
