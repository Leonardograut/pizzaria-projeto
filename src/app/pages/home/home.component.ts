import { Component, OnInit } from '@angular/core';
import { DetalhesPizza } from '../model/DetalhesPizza';

import { DetalheesService } from './detalhees.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  // foodData: any
  pizzas:DetalhesPizza[]=[];
 
  // pizza = new DetalhesPizza();

  constructor(private services: DetalheesService){}
  

  
  
  
  ngOnInit(): void {
    
    this.getPizzaDetails()
   
  }


  getPizzaDetails():void{
    this.services.getPizzaDetails()
    .subscribe(retorno => this.pizzas = retorno);
 }

 

  // ngOnInit(): void {
  //   this.services.getPizzaDetails().subscribe(
  //     (data) => {
  //       this.foodData = data;
  //     },
  //     (error) => {
  //       console.error('Erro ao obter os detalhes da pizza:', error);
  //     }
  //   );
  // }
  
  
  
}
