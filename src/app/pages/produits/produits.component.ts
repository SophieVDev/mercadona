import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Products } from './modele';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})


export class ProduitsComponent implements OnInit {

  products: Products[] = [];
  productsFilter: Products[] = [];

  

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchData();
  }

public fetchData() {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = response;
        this.productsFilter = this.products;
      },
      (error) => {
        console.error("Erreur lors de la requête de produits :", error);
      }
    );
  }

  //FILTRE PAR CATEGORIE//

  afficherProduitsMaison() {
    this.productsFilter = this.products.filter(products => products.categories && products.categories.id === 1);
  }

  afficherProduitsCosmetique() {
    this.productsFilter = this.products.filter(products => products.categories && products.categories.id === 2);
  }
  
  afficherProduitsAliementaire() {
    this.productsFilter = this.products.filter(products => products.categories && products.categories.id === 3);
  }

  afficherProduits() {
    // Affichez tous les produits
    this.productsFilter = this.products;
  }


}


