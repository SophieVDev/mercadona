// models.ts
export interface Products {
    nom: string;
    description:string;
    prix: number;
    promotion:number;
    photoUrl : string;
    expirationDate: string;
    categories: {
      id: number,
      name: string,
    };
    image:null,
  
  }