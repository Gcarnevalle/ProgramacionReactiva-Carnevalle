import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesFormComponent } from './estudiantes-form.component';

describe('EstudiantesFormComponent', () => {
  let component: EstudiantesFormComponent;
  let fixture: ComponentFixture<EstudiantesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
