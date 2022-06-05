import { Component, Input, OnInit } from '@angular/core';
import { Maletacabina } from '../../models/maletacabina';
import { Maletacabinaimpl } from '../../models/maletacabinaimpl';

@Component({
  selector: 'app-maletacabina',
  templateUrl: './maletacabina.component.html',
  styleUrls: ['./maletacabina.component.css']
})
export class MaletacabinaComponent implements OnInit {
  @Input() maletaCabina : Maletacabina = new Maletacabinaimpl(0,0,0,0);

  constructor() { }

  ngOnInit(): void {
  }

}
