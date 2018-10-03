import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoesModelosComponent } from './caminhoes-modelos.component';

describe('CaminhoesModelosComponent', () => {
  let component: CaminhoesModelosComponent;
  let fixture: ComponentFixture<CaminhoesModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoesModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhoesModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
