import { Component } from '@angular/core';

@Component({
  selector: 'app-pagos-previsionales',
  templateUrl: './pagos-previsionales.component.html',
  styleUrls: ['./pagos-previsionales.component.css']
})
export class PagosPrevisionalesComponent {
  salarioBase: number = 0;
  tasaCotizacion: number = 0;
  regimen: string = '';
  categoriaLaboral: string = '';
  empresa: string = '';
  pagoRealizado: boolean = false;
  montoPago: number = 0;
  esRifRegimen: boolean = false;

  calcularMontoPago() {
    if (this.regimen === 'RIF') {
      this.tasaCotizacion = 5; // Tasa de cotización para el régimen RIF
      this.esRifRegimen = true;
    } else {
      this.tasaCotizacion = 10; // Tasa de cotización predeterminada para otros regímenes
      this.esRifRegimen = false;
    }

    this.montoPago = this.salarioBase * (this.tasaCotizacion / 100);
  }
  realizarPago() {
    // Realizar cálculo del pago previsional
    this.montoPago = this.salarioBase * (this.tasaCotizacion / 100);

    // Establecer la bandera de pago realizado como verdadera
    this.pagoRealizado = true;
  }
}

