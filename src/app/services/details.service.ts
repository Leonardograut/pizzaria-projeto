import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }


  pizzaDetails = [ 


    {
      id:1,
      pizzaName:"Chocolate",
      pizzaDetails:"Chocolate é uma pizza deliciosa",
      pizzaPrice:40,
      pizzaImg:"https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-chocolate-730x449.jpg"


    },
  


    {
      id:2,
      pizzaName:"Calabresa",
      pizzaDetails:"Queijo é uma pizza deliciosa",
      pizzaPrice:40,
      pizzaImg:"https://cdn6.campograndenews.com.br/uploads/noticias/2022/03/04/3cb5530b66938475b217183a18974de301f5b0fd.jpg"


    },
  
    {
      id:3,
      pizzaName:"Frango com Catupiry",
      pizzaDetails:"Queijo é uma pizza deliciosa",
      pizzaPrice:40,
      pizzaImg:"https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg"


    },

    {
      id:4,
      pizzaName:"Napolitana",
      pizzaDetails:"Queijo é uma pizza deliciosa",
      pizzaPrice:40,
      pizzaImg:"https://mail.experts.nita.com.br/img/posts/6d621d61a09a836b9c9d373c39952ca7f866b67b.png"


    },

    {
      id:5,
      pizzaName:"Atum Com Cebola",
      pizzaDetails:"Atum com Cebola uma pizza deliciosa",
      pizzaPrice:40,
      pizzaImg:"https://i0.wp.com/vituccio.com/wp-content/uploads/2018/07/atum.png?fit=1000%2C1000&ssl=1"


    },

   ]
}
