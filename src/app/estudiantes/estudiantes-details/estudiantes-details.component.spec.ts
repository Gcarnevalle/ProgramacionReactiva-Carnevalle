import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesDetailsComponent } from './estudiantes-details.component';

describe('EstudiantesDetailsComponent', () => {
  let component: EstudiantesDetailsComponent;
  let fixture: ComponentFixture<EstudiantesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
