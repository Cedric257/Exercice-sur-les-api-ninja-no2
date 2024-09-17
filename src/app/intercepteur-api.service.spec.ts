import { TestBed } from '@angular/core/testing';

import { IntercepteurApiService } from './intercepteur-api.service';

describe('IntercepteurApiService', () => {
  let service: IntercepteurApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercepteurApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
