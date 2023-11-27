import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetalhesPizza } from '../model/DetalhesPizza';

@Injectable({
  providedIn: 'root'
})
export class DetalheesService {



  private apiUrl:string ='http://localhost:8080/pizza/';

  constructor(private http: HttpClient) { }

     getPizzaDetails(): Observable<DetalhesPizza[]> {
     return this.http.get<DetalhesPizza[]>(this.apiUrl);
     


     

  }

 


}
