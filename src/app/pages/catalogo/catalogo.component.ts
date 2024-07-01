import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  searchForm: FormGroup;

  catalogItems = [
    { name: 'ACESSORIOS', link: 'https://drive.google.com/file/d/1iOvu2Ew9kCHuNaNsAFe6x7JOh1gyOx2g/view?usp=drive_link', img: 'assets/img/TAMPAS E ACESSORIOS.png' },
    { name: 'ACQUA BIO', link: 'https://drive.google.com/file/d/1ipaseg0Fh9nQt2x0ayayiA8W9AbwyRC4/view?usp=drive_link', img: 'assets/img/acqua bio.png' },
    { name: 'BRASILEIROS', link: 'https://drive.google.com/file/d/1j3PQqOUWgqUA7ySQvH36L9NK1coXrzBY/view?usp=drive_link', img: 'assets/img/BRASILEIRO.png' },
    { name: 'BALDE PREMIUM', link: 'https://drive.google.com/file/d/1iw5P00F0Zlc_e0mcl7ZVw8ZeYBS-z9xy/view?usp=drive_link', img: 'assets/img/BALDE PREMIUM.png' },
    { name: 'BALDES 5L', link: 'https://drive.google.com/file/d/1j-yEocLl8OaCIUWDOzksaWrVNlbZFBUT/view?usp=drive_link', img: 'assets/img/BALDE 5L.png' },
    { name: 'CALDERETAS', link: 'https://drive.google.com/file/d/1j9OxrFMyJQhjeMEYJHfDzsff23cVn4t1/view?usp=drive_link', img: 'assets/img/CALDERETAS.png' },
    { name: 'CANECA SLIM', link: 'https://drive.google.com/file/d/1jTCtNQJ-HS8FM0xc_bJ8FkOrnIfLN6tv/view?usp=drive_link', img: 'assets/img/CANECA SLIM.png' },
    { name: 'CANECAS 300 E 500ML', link: 'https://drive.google.com/file/d/1jR2QGI3rbT7OBRME-93o5KIeLfVqnj1U/view?usp=drive_link', img: 'assets/img/CANECA 300 E 500.png' },
    { name: 'CANECA MOSCOW MULE', link: 'https://drive.google.com/file/d/1jdgKYvSjJLJ2ErHXT1rafIBLedODIZbK/view?usp=drive_link', img: 'assets/img/MOSCOW MULE.png' },
    { name: 'DRAFT', link: 'https://drive.google.com/file/d/1jZO_-SQsW6efOG_gNNqA5_hoMhWkdHOb/view?usp=drive_link', img: 'assets/img/DRAFT.png' },
    { name: 'LINHA ECO', link: 'https://drive.google.com/file/d/1kJtcQobyM-GhOzpnM9A-rkvN6vn6X6uX/view?usp=drive_link', img: 'assets/img/LINHA ECO.png' },
    { name: 'LONG PREMIUM -  LIGHT - FIT', link: 'https://drive.google.com/file/d/1jc1rCcgJvVO5Ejyp8pGqG0RNQftENoLS/view?usp=drive_link', img: 'assets/img/LONG DRINK.png' },
    { name: 'PIXEL', link: 'https://drive.google.com/file/d/1jf5QzrrlxUvKW1p4IHzdO8M0rsuTdLFy/view?usp=drive_link', img: 'assets/img/PIXEL.png' },
    { name: 'PINTURAS ESPECIAIS', link: 'https://drive.google.com/file/d/1kP4pPSG8bFBQqcIR8rPubeSQsRuCUlHg/view?usp=drive_link', img: 'assets/img/PINTURAS ESPECIAIS.png' },
    { name: 'SHAKEIRA ROCKET BLENDER', link: 'https://drive.google.com/file/d/1kOZHJL7NTtyf5aRqujPjtReS0pEzx_j1/view?usp=drive_link', img: 'assets/img/ROCKET BLENDER.png' },
    { name: 'SPACE', link: 'https://drive.google.com/file/d/1jhanzPHqN4z6_e12uaJQCHJ2-Ixxw0ph/view?usp=drive_link', img: 'assets/img/SPACE.png' },
    { name: 'SHOT', link: 'https://drive.google.com/file/d/1jh-nNQRXDq3xxxa-y_quNtR3neppyreD/view?usp=drive_link', img: 'assets/img/SHOT.png' },
    { name: 'TULIPA', link: 'https://drive.google.com/file/d/1k3Qzqd_nTqhUX5tO2zY6QgCo_OgPbSbV/view?usp=drive_link', img: 'assets/img/TULIPA.png' },
    { name: 'TAÇA CHANDON', link: 'https://drive.google.com/file/d/15rnUU4IfS71etnXw8nr-6SJTcZVouLqh/view?usp=sharing', img: 'assets/img/TAÇA CHANDON.png' },
    { name: 'TAÇA VINHO', link: 'https://drive.google.com/file/d/15YzgVJVqiaUYZ1NEA6Ibs2OnA6o5MVEd/view?usp=sharing', img: 'assets/img/TAÇA VINHO.png' },
    { name: 'TAÇA LIGHT', link: 'https://drive.google.com/file/d/15fek2dgogD4L636043pDJeT5D5ySYCXC/view?usp=sharing', img: 'assets/img/TAÇA LIGHT.png' },
    { name: 'TWISTER', link: 'https://drive.google.com/file/d/1k7Z26mEvBVNfm1pO6arf613hi3-VtX2y/view?usp=drive_link', img: 'assets/img/TWISTER.png' },
    { name: 'WHISKY', link: 'https://drive.google.com/file/d/1k96pJ4tDaSmaUvNumDxvOqy3p61uS4A1/view?usp=drive_link', img: 'assets/img/WHISKY.png' },
    { name: '', link: '', img: '' },
    { name: '', link: '', img: '' },
    { name: '', link: '', img: '' },
  ];
  filteredItems = this.catalogItems;

  constructor(
    private title: Title,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Catalogos')
    this.searchForm = this.fb.group({
      nome: ['']
    });

    this.searchForm.get('nome').valueChanges.subscribe(value => {
      this.filterItems(value);
    });
  }

  filterItems(searchTerm: string) {
    if (searchTerm) {
      this.filteredItems = this.catalogItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.catalogItems;
    }
  }
}
