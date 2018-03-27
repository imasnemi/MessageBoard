import { TestBed, inject } from '@angular/core/testing';

import { RestService } from './rest.service';
import { testModule } from './test.module';

describe('RestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(testModule);
  });

  it('should be created', inject([RestService], (service: RestService) => {
    expect(service).toBeTruthy();
  }));
});
