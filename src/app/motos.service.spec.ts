import { TestBed } from '@angular/core/testing';

import { MotosService } from './motos.service';

describe('MotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotosService = TestBed.get(MotosService);
    expect(service).toBeTruthy();
  });
});
