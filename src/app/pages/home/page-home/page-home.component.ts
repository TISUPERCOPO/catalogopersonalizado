import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit{

  images =
  [
    'CANECA FAMILIA E TUDO IGUAL.png',
    'COPO ECO 250 EDITADO.png',
    'COPO ECO 400 EDITADA.png',
    'ECO 600.png',
    'KIT 3 EDITADO.jpg',
    'LONG PRETO FOSCO.png',
    'Moscow Mule (2).png',
    'SHOT.png',
    'TAÇA GIN METALIZADA.png',
    'TAÇA VINHO.png',



  ];

  responsiveOptions: any[] | undefined;


  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Personalizados')
  }

}
