import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../pages/produits/modele';



@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: Products[], selectedCategories: string): Products[] {
    if (!selectedCategories || selectedCategories === 'Toutes les catégories') {
      return products; // Si aucune catégorie sélectionnée ou "Toutes les catégories" choisie, retournez tous les produits.
    }

    // Utilisez la colonne categories_id pour filtrer les produits
    return products.filter(products => products.categories_id.toString() === selectedCategories);
  }
}

/*@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName:string): any[]{
    const result:any =[];
  if(!value||filterString==='' || propName ===''){
    return value;
  }  
value.forEach((a:any)=>{
  if(a[propName].trim().toLowerCase().incude(filterString.))
})}

}*/
