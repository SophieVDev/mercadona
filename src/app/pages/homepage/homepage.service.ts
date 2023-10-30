import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../produits/modele';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  readonly API_URL = "http://java-mercadona.eu-west-3.elasticbeanstalk.com/api"; // Assurez-vous que le port est correct

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API_URL}/produits`);
  }
  


}

