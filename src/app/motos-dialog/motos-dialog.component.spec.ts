import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosDialogComponent } from './motos-dialog.component';

describe('MotosDialogComponent', () => {
  let component: MotosDialogComponent;
  let fixture: ComponentFixture<MotosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
