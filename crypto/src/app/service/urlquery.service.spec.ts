import { TestBed } from '@angular/core/testing';

import { UrlqueryService } from './urlquery.service';

describe('UrlqueryService', () => {
  let service: UrlqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
