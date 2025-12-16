import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarComponent } from './asidebar.component';

describe('Asidebar', () => {
  let component: AsideBarComponent;
  let fixture: ComponentFixture<AsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
