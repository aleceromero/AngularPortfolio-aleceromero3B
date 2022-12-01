import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiModalComponent } from './sobre-mi-modal.component';

describe('SobreMiModalComponent', () => {
  let component: SobreMiModalComponent;
  let fixture: ComponentFixture<SobreMiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
