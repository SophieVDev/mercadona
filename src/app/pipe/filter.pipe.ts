import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: any[], selectedCategory: string): any[] {
    if (!selectedCategory) {
      return products; // Aucune catégorie sélectionnée, retournez tous les produits
    }

    return products.filter(product => product.category === selectedCategory);
  }
}