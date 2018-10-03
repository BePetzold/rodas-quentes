import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoesAnosComponent } from './caminhoes-anos.component';

describe('CaminhoesAnosComponent', () => {
  let component: CaminhoesAnosComponent;
  let fixture: ComponentFixture<CaminhoesAnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoesAnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhoesAnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
