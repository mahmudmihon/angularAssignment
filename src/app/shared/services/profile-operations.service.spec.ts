import { TestBed } from '@angular/core/testing';

import { ProfileOperationsService } from './profile-operations.service';

describe('ProfileOperationsService', () => {
  let service: ProfileOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
