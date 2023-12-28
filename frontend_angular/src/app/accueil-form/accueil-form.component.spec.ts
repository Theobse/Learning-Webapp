import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilFormComponent } from './accueil-form.component';

describe('AccueilFormComponent', () => {
  let component: AccueilFormComponent;
  let fixture: ComponentFixture<AccueilFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilFormComponent]
    });
    fixture = TestBed.createComponent(AccueilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
