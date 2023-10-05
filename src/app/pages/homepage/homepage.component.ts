import { Component,OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { Products } from '../produits/modele';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  products: Products[] = [];
  produitsEnPromotion: Products[] = [];
  hasRgpdConsent: boolean = false;

  constructor(
    
  private httpClient: HttpClient,
    private homepageService: HomepageService,
  ) {}

  ngOnInit() {
    // Vérification si si l'utilisateur a donné son consentement en utilisant localStorage
    this.hasRgpdConsent = localStorage.getItem('rgpdConsent') === 'true';

    // Affichage de la boîte de dialogue des cookies uniquement si l'utilisateur n'a pas encore donné son consentement
    if (!this.hasRgpdConsent) {
      this.showCookieAlert();
    }

    // Chargement des données des produits
    this.fetchData();
  }


  private fetchData() {
    this.homepageService.getProducts().subscribe(
      (response) => {
        this.products = response;

        // Filtrer les produits en promotion une fois les données récupérées
        this.produitsEnPromotion = this.products.filter(product => product.promotion > 0);
      },
      (error) => {
        console.error("Erreur lors de la requête de produits :", error);
      }
    );
  }

  private showCookieAlert() {
    // Affichage de la boîte de dialogue des cookies
  }

  giveRgpdConsent() {
    // Donnez le consentement et enregistrez-le dans localStorage
    localStorage.setItem('rgpdConsent', 'true');
    this.hasRgpdConsent = true;
  }

  }









