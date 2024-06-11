import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  providers:[RickAndMortyService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  personajes: any;

  constructor(private rymService: RickAndMortyService){}
  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe(
      resultado => {
        this.personajes = resultado;
        console.log(this.personajes);
      }
    )
  }

}
