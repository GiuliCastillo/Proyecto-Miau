import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onConfigButtonPressed(){
    this.router.navigate(['/configuracion'])
  }

  onHomeButtonPressed(){
    this.router.navigate(['/home'])
  }
}
