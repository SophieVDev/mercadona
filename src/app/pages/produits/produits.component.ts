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
  produitsFiltre: Products[] = [];

  

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = response;
        this.produitsFiltre = this.products;
      },
      (error) => {
        console.error("Erreur lors de la requête de produits :", error);
      }
    );
  }

  //FILTRE PAR CATEGORIE//

  afficherProduitsMaison() {
    // Filtrer les produits par catégorie "Maison" (ID 1)
    this.produitsFiltre = this.products.filter(
      (product) => product.categories.id === 1
    );
  }

  afficherProduitsCosmetique() {
    // Filtrer les produits par catégorie "Cosmetique" (ID 2)
    this.produitsFiltre = this.products.filter(
      (product) => product.categories.id === 2
    );
  }

  afficherProduitsAliementaire() {
    // Filtrer les produits par catégorie "Aliementaire" (ID 3)
    this.produitsFiltre = this.products.filter(
      (product) => product.categories.id === 3
    );
  }


  afficherProduits() {
    // Filtrer les produits par catégories ayant les ID 1, 2 ou 3
    this.produitsFiltre = this.products.filter(
      (product) => [1, 2, 3].includes(product.categories.id)
    );
  }
}


