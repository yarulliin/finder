import { TestBed } from '@angular/core/testing';

import { FilmsFacadeService } from './films-facade.service';

describe('FilmsFacadeService', () => {
  let service: FilmsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
