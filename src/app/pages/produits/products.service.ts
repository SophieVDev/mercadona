import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './modele';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly API_URL = "http://localhost:8081/api"; 

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API_URL}/produits`);
  }

}

