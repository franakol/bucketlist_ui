import { TestBed } from '@angular/core/testing';

import { BucketlistService } from './bucketlist.service';

describe('BucketlistService', () => {
  let service: BucketlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BucketlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
