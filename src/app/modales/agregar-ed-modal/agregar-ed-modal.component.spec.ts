import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEdModalComponent } from './agregar-ed-modal.component';

describe('AgregarEdModalComponent', () => {
  let component: AgregarEdModalComponent;
  let fixture: ComponentFixture<AgregarEdModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEdModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
