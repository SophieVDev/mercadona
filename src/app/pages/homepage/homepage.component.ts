import { Component } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  selectedCategory: string | null = null;

  products: any[] = [];

  constructor(private produitService: ProduitService) {}

  getProductsByCategorie(categorie: string) {
    this.produitService.getProductsByCategorie(categorie).subscribe((products) => {
      // Traitez les produits récupérés, par exemple, stockez-les dans une variable du composant pour les afficher dans le template.
      this.products=products
    });
}
headerText: string=""
  menus : any = [{
    id :1,
    name:"Alimentation",
    categoryId: "alimentation",
    active:false
  },
  {
    id :2,
    name:"Cosmétique",
    categoryId: "cosmetique",
    active:false
  },
  {
    id :3,
    name:"Maison",
    categoryId: "maison",
    active:false
  },
]
  ngOnInit(): void {
      
  }
  

  

}

