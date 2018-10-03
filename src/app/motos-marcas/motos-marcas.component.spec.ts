import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosMarcasComponent } from './motos-marcas.component';

describe('MotosMarcasComponent', () => {
  let component: MotosMarcasComponent;
  let fixture: ComponentFixture<MotosMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
