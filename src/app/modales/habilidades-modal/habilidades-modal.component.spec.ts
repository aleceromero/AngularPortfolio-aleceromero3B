import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesModalComponent } from './habilidades-modal.component';

describe('HabilidadesModalComponent', () => {
  let component: HabilidadesModalComponent;
  let fixture: ComponentFixture<HabilidadesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
