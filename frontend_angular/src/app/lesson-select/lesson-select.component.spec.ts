import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSelectComponent } from './lesson-select.component';

describe('LessonSelectComponent', () => {
  let component: LessonSelectComponent;
  let fixture: ComponentFixture<LessonSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonSelectComponent]
    });
    fixture = TestBed.createComponent(LessonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
