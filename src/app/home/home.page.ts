import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  componemtes : Componente[] = [{
    icon: 'logo-octocat',
    name: 'sos',
    redirecTo: '/sos'
  }, 
  {
    icon: 'logo-octocat',
    name: 'breeds',
    redirecTo: '/breeds' 
  },
  {
    icon: 'logo-octocat',
    name: 'Datos',
    redirecTo: '/datos' 
  },
  
  ];

  constructor(private menuController: MenuController) {}
  ngOnInit(){
  }  
  mostrarMenu(){
    this.menuController.open('first')
 }
}