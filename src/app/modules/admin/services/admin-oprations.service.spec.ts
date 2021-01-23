import { TestBed } from '@angular/core/testing';

import { AdminOprationsService } from './admin-oprations.service';

describe('AdminOprationsService', () => {
  let service: AdminOprationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOprationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
