import { TestBed } from '@angular/core/testing';

import { HightchartService } from './hightchart.service';

describe('HightchartService', () => {
  let service: HightchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HightchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
