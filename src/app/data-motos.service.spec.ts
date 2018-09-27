import { TestBed } from '@angular/core/testing';

import { DataMotosService } from './data-motos.service';

describe('DataMotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMotosService = TestBed.get(DataMotosService);
    expect(service).toBeTruthy();
  });
});
