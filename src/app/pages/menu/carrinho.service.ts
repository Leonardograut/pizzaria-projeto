import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itensCarrinho: any[] = [];
  quantidadeItens: number = 0;



  constructor(private http: HttpClient,  ) { }

  adicionarItem(item: any): void {
    this.itensCarrinho.push(item);
    this.atualizarQuantidadeItens();
  }

  obterItensCarrinho(): any[] {
    return this.itensCarrinho;
  }

  private atualizarQuantidadeItens(): void {
    this.quantidadeItens = this.itensCarrinho.length;
  }

  removerPedido(index: number): void {
    this.itensCarrinho.splice(index, 1);
    this.atualizarQuantidadeItens();
  }


  
  


  
  adicionarNoBanco(): void {
     console.log('oiasoso')
  }


}