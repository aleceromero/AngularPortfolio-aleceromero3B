import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionModalComponent } from './educacion-modal.component';

describe('EducacionModalComponent', () => {
  let component: EducacionModalComponent;
  let fixture: ComponentFixture<EducacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
