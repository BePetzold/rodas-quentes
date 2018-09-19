import { TestBed } from '@angular/core/testing';

import { CarrosServiceService } from './carros-service.service';

describe('CarrosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrosServiceService = TestBed.get(CarrosServiceService);
    expect(service).toBeTruthy();
  });
});
