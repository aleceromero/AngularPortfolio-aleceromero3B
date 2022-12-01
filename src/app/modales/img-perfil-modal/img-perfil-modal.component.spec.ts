import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPerfilModalComponent } from './img-perfil-modal.component';

describe('ImgPerfilModalComponent', () => {
  let component: ImgPerfilModalComponent;
  let fixture: ComponentFixture<ImgPerfilModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPerfilModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPerfilModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
