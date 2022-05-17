import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm = new FormGroup({
    administrador : new FormControl ('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form: any){
    console.log(form)
  }

   accion() {
    var enlace = document.getElementsByClassName('enlace');
    for (var i = 0; i < enlace.length; i++) {
        enlace[i].classList.toggle('desaparece');
    }
}


}
