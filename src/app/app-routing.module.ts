import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent} from './pages/about-us/about-us.component';
import { ContactUsComponent} from './pages/contact-us/contact-us.component';
import { MentionsLegalesComponent} from './pages/mentions-legales/mentions-legales.component';
import { EmailMerciComponent} from './pages/email-merci/email-merci.component';
import { ProduitsComponent} from './pages/produits/produits.component';
import { LoginComponent} from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomepageComponent },
  {path: 'nous-connaître', component: AboutUsComponent},
  {path: 'nous-contacter', component: ContactUsComponent},
  {path: 'mentions-legales', component: MentionsLegalesComponent},
  {path: 'email-envoye', component: EmailMerciComponent},
  {path: 'produits', component:ProduitsComponent},
  {path: 'se-connecter', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }