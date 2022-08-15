import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcademicaComponent } from './form-academica.component';

describe('FormAcademicaComponent', () => {
  let component: FormAcademicaComponent;
  let fixture: ComponentFixture<FormAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAcademicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
