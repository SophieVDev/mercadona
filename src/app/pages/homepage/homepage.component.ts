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
  hasRgpdConsent: boolean = true;

  constructor(
    private homepageService: HomepageService,
    private rgpdService: RgpdService
  ) {}

  ngOnInit() {
    this.hasRgpdConsent = this.rgpdService.hasConsent();

    if (this.hasRgpdConsent) {
      this.fetchData();
    }
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

  giveRgpdConsent() {
    this.rgpdService.giveConsent();
    this.hasRgpdConsent = true;
    this.fetchData();
  }

  //29/09/23/////////////
 /* products: Products[] = [];
  produitsEnPromotion: Products[] = [];
  

  constructor(private homepageService: HomepageService) {}

  ngOnInit() {
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
    );*/
  }












 





