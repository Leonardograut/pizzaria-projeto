import { Injectable } from '@angular/core';
import { DetalhesPizza } from '../model/DetalhesPizza';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalizaServiceTsService {

  private apiUrl:string ='http://localhost:8080/pizza/'
  
  constructor(private http: HttpClient) { }



  finalizar(obj:DetalhesPizza):Observable<DetalhesPizza>{
   return this.http.post<DetalhesPizza>(this.apiUrl,obj);
  }
 
  }


