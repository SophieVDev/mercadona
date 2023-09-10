import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {
  selectedCategory: string | null = null;


  @Input() menu : any
  @Output() menuAction:EventEmitter<any> = new EventEmitter()


  ngOnInit(): void {
      
  }

  getMenuAction(){
    this.menuAction.emit(this.menu);
  }


  products: any[] = [];

  constructor(private produitService: ProduitService) {}

  getProduitsByCategorie(categorie: string) {
    this.produitService.getProductsByCategorie(categorie).subscribe((products) => {
      this.products = products;
    });
  }
}