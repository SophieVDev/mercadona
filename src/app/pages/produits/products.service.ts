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

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API_URL}/produits`);
  }
}

///27/09/////////////////////////////





/*// Ajoutez des propriétés pour stocker les produits et la catégorie sélectionnée
  products: Products[] = []; // Assurez-vous d'initialiser products avec vos données
  selectedCategory: string = ''; // Initialisez la catégorie sélectionnée

  // Ajoutez une méthode pour gérer le changement de catégorie
  filterProductsByCategory(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
  }
}


/////ANCIEN

/*@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly API_URL = "http://localhost:8081/api"; // Assurez-vous que le port est correct

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API_URL}/produits`);
  }

  

}*/ //ANCIEN

