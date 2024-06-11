import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    CommonModule  //modulo para ciclos y condiciones
  ],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent implements OnInit, DoCheck {
  contador = 0;

  ngDoCheck(): void {
    this.contador++;
    console.log("Veces que se ejecuta DoCheck: ", this.contador);
  }
  ngOnInit(): void {
    console.log("Entre al OnInit");
  }

  seMuestra1 = true;
  seMuestra2 = true;

  frutas = ['pera', 'manzana', 'uva', 'banano', 'piña', 'limon']

  prenderApagar(){
    //condicion ? que pasa si true : que pasa si false
    this.seMuestra1 = this.seMuestra1 ? false : true;
  }
  
  prenderApagar2() {
    this.seMuestra2 = !this.seMuestra2;

  }
}
