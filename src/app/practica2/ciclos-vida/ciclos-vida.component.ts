import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormulariosComponent } from '../../practica1/formularios/formularios.component';

@Component({
  selector: 'app-ciclos-vida',
  standalone: true,
  imports: [RouterLink, FormulariosComponent],
  templateUrl: './ciclos-vida.component.html',
  styleUrl: './ciclos-vida.component.css'
})
export class CiclosVidaComponent implements OnInit, DoCheck, OnDestroy {
  contador = 0;

  ngOnDestroy(): void {
    console.log("Componente Destruido!");
  }
  
  ngDoCheck(): void {
    this.contador++;
    console.log("Paso por el DoCheck", this.contador);
  }
  
  ngOnInit(): void {
    console.log("Entre al ngOnInit")
  }

  onEmit(mensaje:string) {
    window.alert('Mi hijo a enviado esta informacion: ' + mensaje);
  }

}
