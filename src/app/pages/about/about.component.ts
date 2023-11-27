import { Component } from '@angular/core';
import { CarrinhoService } from '../menu/carrinho.service';
import { DetalheesService } from '../home/detalhees.service';
import { DetalhesPizza } from '../model/DetalhesPizza';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  itensCarrinho: any[];
  pizzas:DetalhesPizza[]=[];



  constructor(private carrinhoService: CarrinhoService , private service: DetalheesService) {
    this.itensCarrinho = this.carrinhoService.obterItensCarrinho();
  }

  removerPedido(index: number): void {
    this.carrinhoService.removerPedido(index);
  }

  finalizarCompra(): void {
   
      
  }

  adicionarNoBanco(): void {
    this.carrinhoService.adicionarNoBanco();
  }


 


}
