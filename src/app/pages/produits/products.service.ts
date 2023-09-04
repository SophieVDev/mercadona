import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './modele';
import { ProduitPromo } from './promo.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly API_URL = "http://localhost:8081/api"; // Assurez-vous que le port est correct

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API_URL}/products`);
  }

  getProduitPromo(): Observable<ProduitPromo[]> {
    return this.httpClient.get<ProduitPromo[]>(`${this.API_URL}/promo`);
  }
}
