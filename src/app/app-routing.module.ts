import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent} from './pages/about-us/about-us.component';
import { ContactUsComponent} from './pages/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomepageComponent },
  {path: 'nous-connaître', component: AboutUsComponent},
  {path: 'nous-contacter', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
