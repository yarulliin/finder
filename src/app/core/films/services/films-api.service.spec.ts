import { TestBed } from '@angular/core/testing';

import { FilmsApiService } from './films-api.service';

describe('FilmsApiService', () => {
  let service: FilmsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
