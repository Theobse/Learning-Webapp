import { TestBed } from '@angular/core/testing';

import { LessonSelectService } from './lesson-select.service';

describe('LessonSelectService', () => {
  let service: LessonSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
