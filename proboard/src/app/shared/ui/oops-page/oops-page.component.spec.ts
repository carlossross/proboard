import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsPage } from './oops-page.component';

describe('OopsPage', () => {
  let component: OopsPage;
  let fixture: ComponentFixture<OopsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OopsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
