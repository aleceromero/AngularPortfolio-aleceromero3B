import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProyModalComponent } from './agregar-proy-modal.component';

describe('AgregarProyModalComponent', () => {
  let component: AgregarProyModalComponent;
  let fixture: ComponentFixture<AgregarProyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
