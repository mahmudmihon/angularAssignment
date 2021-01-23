import { TestBed } from '@angular/core/testing';

import { UserIdResolverService } from './user-id-resolver.service';

describe('UserIdResolverService', () => {
  let service: UserIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
