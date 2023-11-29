import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalhesPizza } from '../model/DetalhesPizza';




@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  // private itensCarrinho: any[] = [];
  quantidadeItens: number = 0;
  pizzas: DetalhesPizza[] = [];



  constructor(private http: HttpClient,) { }

  adicionarItem(detalheesPizza: DetalhesPizza): void {

    this.pizzas.push(detalheesPizza)
    this.atualizarQuantidadeItens();
  }

  obterItensCarrinho(): any[] {
    return this.pizzas;
  }
  obterCarrinhoComDesconto() {
    this.pizzas.forEach(pizza => {
      pizza.pizzaPrice = pizza.pizzaPrice * 0.86

    });
    return this.pizzas

  }

  //outra funçao obtercarrinhodesconto

  private atualizarQuantidadeItens(): void {
    this.quantidadeItens = this.pizzas.length;
  }

  removerPedido(index: number): void {
    this.pizzas.splice(index, 1);
    this.atualizarQuantidadeItens();
  }








  adicionarNoBanco(): void {
    console.log('oiasoso')
  }


}