import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavBaComponent } from './menu-nav-ba.component';

describe('MenuNavBaComponent', () => {
  let component: MenuNavBaComponent;
  let fixture: ComponentFixture<MenuNavBaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNavBaComponent]
    });
    fixture = TestBed.createComponent(MenuNavBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
