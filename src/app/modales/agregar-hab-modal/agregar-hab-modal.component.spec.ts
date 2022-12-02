import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHabModalComponent } from './agregar-hab-modal.component';

describe('AgregarHabModalComponent', () => {
  let component: AgregarHabModalComponent;
  let fixture: ComponentFixture<AgregarHabModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHabModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
