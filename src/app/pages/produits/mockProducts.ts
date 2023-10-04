import { Products } from './modele'; // Assurez-vous d'importer correctement le modèle Products

    export const mockProducts: Products[] = [
        {
          nom: 'Produit 1',
          description: 'Description du produit 1',
          prix: 10,
          promotion: 5,
          photoUrl: 'url_de_l_image_1',
          expirationDate: '2023-12-31',
          categories: {
            id: 1,
            name: 'Maison'
          }
        },
        {
          nom: 'Produit 2',
          description: 'Description du produit 2',
          prix: 15,
          promotion: 0,
          photoUrl: 'url_de_l_image_2',
          expirationDate: '2023-11-30',
          categories: {
            id: 2,
            name: 'Cosmetique'
          }
        },
        {
          nom: 'Produit 3',
          description: 'Description du produit 3',
          prix: 20,
          promotion: 10,
          photoUrl: 'url_de_l_image_3',
          expirationDate: '2023-10-15',
          categories: {
            id: 3,
            name: 'Alimentaire'
          }
        },
       
      ];