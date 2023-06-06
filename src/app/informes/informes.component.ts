import { Component } from '@angular/core';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent {
  tipoInforme: string | undefined;
  informeGenerado: boolean = false;
  informe: string | undefined;

  generarInforme() {
    // Lógica para generar el informe según el tipo seleccionado
    // Puedes reemplazar este código con tu lógica real de generación de informes
    this.informe = `Informe generado (${this.tipoInforme})`;
    this.informeGenerado = true;
  }
}
