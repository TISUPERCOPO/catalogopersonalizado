import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

constructor(
  private title: Title
) {}

  ngOnInit(): void {
    this.title.setTitle('Catalogos')

  }

}
