import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  getProductsByCategorie(categorie: string): Observable<any[]> {
    // Remplacez l'URL par l'URL de votre API pour récupérer les produits par catégorie
    return this.http.get<any[]>(`https://localhost:8081/api/promo/{produit_promoCategorie}`);
  }

  }

