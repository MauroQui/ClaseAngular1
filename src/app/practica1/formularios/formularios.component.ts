import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent implements OnInit{
  @Input() nombre = ''; 
  @Output() emisor = new EventEmitter <string>();
  
  ngOnInit(): void {
    console.log("Formulario ha sido inicializado");
  }

  
  borrarNombre() {
    this.nombre = '';
  } 

}
