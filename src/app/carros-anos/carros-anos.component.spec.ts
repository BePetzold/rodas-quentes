import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosAnosComponent } from './carros-anos.component';

describe('CarrosAnosComponent', () => {
  let component: CarrosAnosComponent;
  let fixture: ComponentFixture<CarrosAnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosAnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosAnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
