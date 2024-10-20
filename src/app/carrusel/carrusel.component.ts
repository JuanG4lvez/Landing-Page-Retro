import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ICarouselItems } from './../../interfaces/iCarouselItems';



@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit{
  height = 500;
  isFullScreen = false;
  @Input() items: ICarouselItems[] = [];


  public currentPosition = 0;
  public finalHeight: string | number = 0;

  constructor ( ) {
   
    this.finalHeight = this.isFullScreen ? "100vh" : `${this.height}px`
  }

  ngOnInit() {
    this.items.map((i, index) => {
      i.id = index;
      i.marginleft = 0;
    })
  }
  
  setCurrentPosition(position: number){
    this.currentPosition = position;
    this.items.find(i => i.id == 0)?.marginleft !== undefined ? -100 * position : '';
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length - 1)
    {
      finalPercentage = -100 * nextPosition;
    }
    else
    {
      nextPosition = 0;
    }
    this.items.find(i => {
      if(i.id === 0 && i.id !== undefined)
        {
          i.marginleft = finalPercentage;
        }
    });
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0)
      {
        finalPercentage = -100 * backPosition;
      }
      else
      {
        backPosition = this.items.length - 1;
        finalPercentage = -100 * backPosition;
      }
    this.items.find(i => {
      if(i.id === 0 && i.id !== undefined)
        {
          i.marginleft = finalPercentage;
        }
    });
    this.currentPosition = backPosition;
  }

  
}

