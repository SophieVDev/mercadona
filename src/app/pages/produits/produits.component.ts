import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './modele';
import { ProduitPromo } from './promo.model'

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  products: Product[] = [];
  produitPromo: ProduitPromo[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error("Erreur lors de la requête de produits :", error);
      }
    );

    this.productService.getProduitPromo().subscribe(
      (response) => {
        this.produitPromo = response;
      },
      (error) => {
        console.error("Erreur lors de la requête de promotions :", error);
      }
    );
  }
}