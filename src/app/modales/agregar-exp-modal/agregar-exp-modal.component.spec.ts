import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExpModalComponent } from './agregar-exp-modal.component';

describe('AgregarExpModalComponent', () => {
  let component: AgregarExpModalComponent;
  let fixture: ComponentFixture<AgregarExpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExpModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarExpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
