import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleprogressHySComponent } from './circleprogress-hy-s.component';

describe('CircleprogressHySComponent', () => {
  let component: CircleprogressHySComponent;
  let fixture: ComponentFixture<CircleprogressHySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleprogressHySComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleprogressHySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
