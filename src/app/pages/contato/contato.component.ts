import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  constructor(
    private title: Title

  ) { }

  ngOnInit(): void {
    this.title.setTitle('Contatos')
  }

}
