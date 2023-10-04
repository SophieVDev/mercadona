import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProduitsComponent } from './produits.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './testing-routing.module';
import { ProductsService } from './products.service';
import { mockProducts } from './mockProducts';
import { of } from 'rxjs';


// TESTING HEADER, FOOTER, ROOTER et CATEGORY MAISON

describe('ProduitsComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsComponent, HeaderComponent,FooterComponent],
      imports: [HttpClientModule, AppRoutingModule],
    });
    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should filter products by category "Maison"', fakeAsync(() => {
    // Simulez les données du service (peut-être en utilisant un mock du service)
    const mockService = TestBed.inject(ProductsService);
    spyOn(mockService, 'getProducts').and.returnValue(of(mockProducts));
  
    // Appelez fetchData pour initialiser les données (c'est normalement appelé dans ngOnInit)
    component.fetchData();
    tick();
    fixture.detectChanges();
  
    // Appelez la fonction à tester
    component.afficherProduitsMaison();
    tick();
    fixture.detectChanges();
  
    // Vérifiez si les produits filtrés ont la catégorie "Maison"
    const produitsFiltreMaison = component.produitsFiltre;
    expect(produitsFiltreMaison.length).toBe(1); 
    expect(produitsFiltreMaison[0].categories.id).toBe(1);
  }));

 /* it('should filter products by category "Maison"', fakeAsync (() => {
    // Appelez la fonction à tester
    component.afficherProduitsMaison();

    tick();
    fixture.detectChanges();

    // Vérifiez si les produits filtrés ont la catégorie "Maison"
    const produitsFiltreMaison = component.produitsFiltre;
    expect(produitsFiltreMaison.length).toBe(1); // Il ne devrait y avoir qu'un produit dans le filtre
    expect(produitsFiltreMaison[0].categories.id).toBe(1); // Vérifiez si la catégorie est "Maison"
  }));*/





});
