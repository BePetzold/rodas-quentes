import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoComponent } from './moto.component';

describe('MotoComponent', () => {
  let component: MotoComponent;
  let fixture: ComponentFixture<MotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
