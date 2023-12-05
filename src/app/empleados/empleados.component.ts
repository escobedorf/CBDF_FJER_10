import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados = [
    {id:1, nombre: "Juan", sueldo: 450.45, activo:false},
    {id:2, nombre: "Alan", sueldo: 550.00, activo:true},
    {id:3, nombre: "Omar", sueldo: 500.00, activo:false},
    {id:4, nombre: "Francisco", sueldo: 450.45, activo:false},
    {id:5, nombre: "Nora", sueldo: 350.45, activo:true},
    {id:6, nombre: "Karina", sueldo: 250.45, activo:true},
    {id:7, nombre: "Jesus", sueldo: 150.00, activo:false},
    {id:8, nombre: "Hector", sueldo: 650.00, activo:true},
    {id:9, nombre: "Evelyn", sueldo: 450.45, activo:false},
    {id:10, nombre: "Daniel", sueldo: 350.00, activo:true}
  ]

}
