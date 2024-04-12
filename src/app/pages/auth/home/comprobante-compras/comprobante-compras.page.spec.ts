import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprobanteComprasPage } from './comprobante-compras.page';

describe('ComprobanteComprasPage', () => {
  let component: ComprobanteComprasPage;
  let fixture: ComponentFixture<ComprobanteComprasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComprobanteComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
