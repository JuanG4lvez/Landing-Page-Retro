import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarruselComponent } from "./carrusel/carrusel.component";
import { ClientesComponent } from './clientes/clientes.component';
import {CONSTANT_CAROUSEL_ITEMS_NINTENDO, CONSTANT_CAROUSEL_ITEMS_SEGA , CONSTANT_CAROUSEL_ITEMS_PLAY} from "./const/carrusel.const"
import { ICarouselItems } from '../interfaces/iCarouselItems';
import { IClientes } from '../interfaces/IClientes';
import { CONSTANT_CLIENTES_ITEMS } from './const/clientes.const';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarruselComponent, ClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
  
  public nintData : ICarouselItems [] = CONSTANT_CAROUSEL_ITEMS_NINTENDO;
  public playData : ICarouselItems [] = CONSTANT_CAROUSEL_ITEMS_PLAY;
  public segaData : ICarouselItems [] = CONSTANT_CAROUSEL_ITEMS_SEGA;
  public clientesData : IClientes [] = CONSTANT_CLIENTES_ITEMS;

  typeConsole = 1;

}
