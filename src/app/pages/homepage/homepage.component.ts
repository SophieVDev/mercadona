import { Component,OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { Products } from '../produits/modele';
import { RgpdService } from '../../components/rgpd-alert-component/rgpdService';

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
    private homepageService: HomepageService,
    private rgpdService: RgpdService
  ) {}

  ngOnInit() {
    // Vérifiez si l'utilisateur a donné son consentement en utilisant localStorage
    this.hasRgpdConsent = localStorage.getItem('rgpdConsent') === 'true';

    // Affichez la boîte de dialogue des cookies uniquement si l'utilisateur n'a pas encore donné son consentement
    if (!this.hasRgpdConsent) {
      this.showCookieAlert();
    }

    // Chargez les données des produits
    this.fetchData();
  }

  /*ngOnInit() {
    this.hasRgpdConsent = this.rgpdService.hasConsent();

    if (this.hasRgpdConsent) {
      this.fetchData();
    }
  }*/


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
    // Affichez la boîte de dialogue des cookies
    // ...
  }

  giveRgpdConsent() {
    // Donnez le consentement et enregistrez-le dans localStorage
    this.rgpdService.giveConsent();
    localStorage.setItem('rgpdConsent', 'true');
    this.hasRgpdConsent = true;
  }

 /* giveRgpdConsent() {
    this.rgpdService.giveConsent();
    this.hasRgpdConsent = true;
  }

  removeRgpdCookie() {
    // Supprimez le cookie RGPD (code pour supprimer le cookie ici)

    // Masquez la boîte de dialogue des cookies
    this.hasRgpdConsent = true;
  } */

  }









