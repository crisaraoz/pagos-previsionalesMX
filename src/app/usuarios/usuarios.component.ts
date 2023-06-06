import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: any[] = [
    { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, nombre: 'Usuario 3', email: 'usuario3@example.com' }
  ];
}
