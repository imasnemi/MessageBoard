import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { testModule } from '../shared/test.module';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(testModule);
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
