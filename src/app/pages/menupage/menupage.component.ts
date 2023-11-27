import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent  implements OnInit{
  

   constructor(private param:ActivatedRoute , private service: DetailsService){ }  
   getMenuId:any
   menuData:any
   
  
  ngOnInit(): void {
   this.getMenuId = this.param.snapshot.paramMap.get('id');
   if(this.getMenuId){

    this.menuData = this.service.pizzaDetails.filter((value)=>{
       return value.id == this.getMenuId;
       
    })

   }


  }

}
