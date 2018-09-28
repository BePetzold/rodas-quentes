import { TestBed } from '@angular/core/testing';

import { CaminhoesService } from './caminhoes.service';

describe('CaminhoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaminhoesService = TestBed.get(CaminhoesService);
    expect(service).toBeTruthy();
  });
});
