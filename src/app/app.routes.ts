import { Routes } from '@angular/router';
import { FormulariosComponent } from './practica1/formularios/formularios.component';
import { ControlComponent } from './practica1/control/control.component';
import { MaterialComponent } from './practica2/material/material.component';
import { CiclosVidaComponent } from './practica2/ciclos-vida/ciclos-vida.component';
import { ListaComponent } from './practica3/lista/lista.component';
import { ListaPersonajesComponent } from './practica4/lista-personajes/lista-personajes.component';

export const routes: Routes = [
    
    {
        path: '',
        component: ListaPersonajesComponent 
    },
    
    {
        path: 'lista',
        component: ListaComponent
    },
    {
        path: 'ciclo',
        component: CiclosVidaComponent
    },
    
    {
        path: 'material',
        component: MaterialComponent
    },
    
    {
        path: 'control',
        component: ControlComponent
    
    },
    
    {
        path: 'forms',
        component: FormulariosComponent
    },

];
