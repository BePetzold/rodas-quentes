import { TestBed } from '@angular/core/testing';

import { DataCaminhoesService } from './data-caminhoes.service';

describe('DataCaminhoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCaminhoesService = TestBed.get(DataCaminhoesService);
    expect(service).toBeTruthy();
  });
});
