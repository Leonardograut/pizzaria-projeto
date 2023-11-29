import { Component } from '@angular/core';
import { CarrinhoService } from '../menu/carrinho.service';
import { DetalheesService } from '../home/detalhees.service';
import { DetalhesPizza } from '../model/DetalhesPizza';
import { FinalizaServiceTsService } from './finaliza.service.ts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  // itensCarrinho: any[];
  pizzas:DetalhesPizza[]=[];



  constructor(private carrinhoService: CarrinhoService , private service: DetalheesService , private services: FinalizaServiceTsService) {
    this.pizzas = this.carrinhoService.obterCarrinhoComDesconto();

    // this.carrinhoService.obterCarrinhoComDesconto
  }

  removerPedido(index: number): void {
    this.carrinhoService.removerPedido(index);
  }

  finalizar(): void {
    // this.carrinhoService.obterCarrinhoComDesconto
    //  this.pizzas  = this.carrinhoService.obterCarrinhoComDesconto();
    // console.log(this.pizzas)
    this.pizzas.forEach(pizza => {
          // pizza.pizzaPrice  = pizza.pizzaPrice * 0.86
          this.services.finalizar(pizza).subscribe({
            next: (detalheesPizza: DetalhesPizza) => {
              console.log(detalheesPizza)
            },
            error: (err) => {
              console.log(err)
            }
          });
          
    });


   
     
  }

  adicionarNoBanco(): void {
    this.carrinhoService.adicionarNoBanco();
  }


 


}
