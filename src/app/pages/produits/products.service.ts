import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './modele';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly API_URL = "http://localhost:8081/api"; // Assurez-vous que le port et le chemin sont corrects

  constructor(private httpClient: HttpClient) { }

  /*getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API_URL}/produits`);
  }


  getProduct(productId: number): Observable<Products> {
    const url = `${this.API_URL}/produits/${productId}`;
    return this.httpClient.get<Products>(url);
  }

  // Méthode pour construire photoUrl à partir de l'ID du produit
  buildPhotoUrl(productId: number): string {
    return `${this.API_URL}/products/image/${productId}`;
  }*/



  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API_URL}/produits`);
  }

}

