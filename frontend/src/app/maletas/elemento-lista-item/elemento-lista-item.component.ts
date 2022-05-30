import { Component, Input, OnInit } from '@angular/core';
import { ElementoEquipo } from 'src/app/elementosequipo/models/elementoequipo';

@Component({
  selector: 'app-elemento-lista-item',
  templateUrl: './elemento-lista-item.component.html',
  styleUrls: ['./elemento-lista-item.component.css']
})
export class ElementoListaItemComponent implements OnInit {

  @Input()
  elemento!: ElementoEquipo;

  constructor() { }

  ngOnInit(): void {
  }

}
