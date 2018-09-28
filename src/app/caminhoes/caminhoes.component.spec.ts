import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoesComponent } from './caminhoes.component';

describe('CaminhoesComponent', () => {
  let component: CaminhoesComponent;
  let fixture: ComponentFixture<CaminhoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
