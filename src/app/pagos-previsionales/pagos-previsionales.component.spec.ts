import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPrevisionalesComponent } from './pagos-previsionales.component';

describe('PagosPrevisionalesComponent', () => {
  let component: PagosPrevisionalesComponent;
  let fixture: ComponentFixture<PagosPrevisionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosPrevisionalesComponent]
    });
    fixture = TestBed.createComponent(PagosPrevisionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
