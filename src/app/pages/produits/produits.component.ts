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
  categories: string[] = [];
  selectedCategory: string = 'Toutes les catégories'; // Mettez à jour le nom de la variable

  

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = response;
        this.extractUniqueCategories();
      },
      (error) => {
        console.error("Erreur lors de la requête de produits :", error);
      }
    );
  }

  private extractUniqueCategories() {
    this.categories = Array.from(new Set(this.products.map(products => products.categories_id.toString())));
    this.categories.unshift('Toutes les catégories');
  }

  filterProductsByCategory(categories: string): void {
    this.selectedCategory = categories;
  }

}



/*export class ProduitsComponent implements OnInit {
  products: Products[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error("Erreur lors de la requête de produits :", error);
      }
    );
  }

  
}*/
