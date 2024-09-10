import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onInfoButtonPressed(){
    this.router.navigate(['/biblioteca'])
  }

  onHomeButtonPressed(){
    this.router.navigate(['/home'])
  }
}
