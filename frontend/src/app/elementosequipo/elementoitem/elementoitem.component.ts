import { Component, Input, OnInit } from '@angular/core';
import { ElementoEquipo } from '../models/elementoequipo';
import { ElementoequipoImpl } from '../models/elementoequipo-impl';

@Component({
  selector: 'app-elementoitem',
  templateUrl: './elementoitem.component.html',
  styleUrls: ['./elementoitem.component.css']
})
export class ElementoitemComponent implements OnInit {

  @Input() elemento: ElementoEquipo = new ElementoequipoImpl("", 0);
  constructor() { }

  ngOnInit(): void {
  }

}
