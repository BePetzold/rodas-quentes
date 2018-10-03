import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoesMarcasComponent } from './caminhoes-marcas.component';

describe('CaminhoesMarcasComponent', () => {
  let component: CaminhoesMarcasComponent;
  let fixture: ComponentFixture<CaminhoesMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoesMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhoesMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
