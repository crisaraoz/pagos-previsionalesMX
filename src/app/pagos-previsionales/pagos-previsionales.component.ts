import { Component } from '@angular/core';

@Component({
  selector: 'app-pagos-previsionales',
  templateUrl: './pagos-previsionales.component.html',
  styleUrls: ['./pagos-previsionales.component.css']
})
export class PagosPrevisionalesComponent {
  salarioBase: number = 0;
  tasaCotizacion: number = 0;
  pagoRealizado: boolean = false;
  montoPago: number = 0;

  calcularMontoPago() {
    this.montoPago = this.salarioBase * (this.tasaCotizacion / 100);
  }

  realizarPago() {
    // Realizar cálculo del pago previsional
    this.calcularMontoPago();

    // Establecer la bandera de pago realizado como verdadera
    this.pagoRealizado = true;
  }
}

