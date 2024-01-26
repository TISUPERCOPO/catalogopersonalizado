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
    'LABEL E TIRANTE.png',
    'LABEL J&M.png',
    'LABEL SUMMER 3.png',
    'LABEL SUMMER 5.png',
    'LABEL SUMMER 7.png',
    'LABEL SUMMER 8.png',
    'TIRANTE.png',
    'personalizado-3.png',
    'personalizado-10.png',



  ];

  responsiveOptions: any[] | undefined;


  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Personalizados')


  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
}


}
