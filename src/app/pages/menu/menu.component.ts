import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
import { CarrinhoService } from './carrinho.service';
import { DetalheesService } from '../home/detalhees.service';
import { DetalhesPizza } from '../model/DetalhesPizza';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  
  
  
  constructor(  private service: DetalheesService ,private router: Router,public carrinhoService: CarrinhoService) { }
  // foodData: any;
  searchItem: string = '';
  pizzas:DetalhesPizza[]=[];



  navegarParaItensCarrinho(): void {
    this.router.navigate(['/about']);
  }


  ngOnInit(): void {
  this.getPizzaDetails()
  }



getPizzaDetails():void{
    this.service.getPizzaDetails()
    .subscribe(retorno => this.pizzas = retorno);
 }


 filterItems(): void {
  if (this.searchItem) {
    this.service.getPizzaDetails().subscribe((items: DetalhesPizza[]) => {
      this.pizzas = items.filter(item =>
        item.pizzaName.toLowerCase().includes(this.searchItem.toLowerCase())
      );
    });
  } else {
    this.service.getPizzaDetails().subscribe((items: DetalhesPizza[]) => {
      this.pizzas = items;
    });
  }
}



  adicionarAoCarrinho(detalheesPizza: DetalhesPizza): void {
    
    this.carrinhoService.adicionarItem(detalheesPizza);
  }

  public obterQuantidadeItensNoCarrinho(): number {
    return this.carrinhoService.quantidadeItens;
  }


  
}
