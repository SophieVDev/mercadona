import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent} from './pages/about-us/about-us.component';
import { ContactUsComponent} from './pages/contact-us/contact-us.component';
import { MentionsLegalesComponent} from './pages/mentions-legales/mentions-legales.component';
import { SeConnecterComponent} from './pages/se-connecter/se-connecter.component';
import { EmailMerciComponent} from './pages/email-merci/email-merci.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomepageComponent },
  {path: 'nous-connaître', component: AboutUsComponent},
  {path: 'nous-contacter', component: ContactUsComponent},
  {path: 'mentions-legales', component: MentionsLegalesComponent},
  {path: 'se-connecter', component: SeConnecterComponent},
  {path: 'email-envoye', component: EmailMerciComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
