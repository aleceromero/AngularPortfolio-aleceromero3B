import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaModalComponent } from './experiencia-modal.component';

describe('ExperienciaModalComponent', () => {
  let component: ExperienciaModalComponent;
  let fixture: ComponentFixture<ExperienciaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
