import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PetComponent } from './components/pet/pet.component';
import { PetsComponent } from './components/pets/pets.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SearchComponent } from './components/search/search.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: "Rescued Australian Shepherds"}},
  { path: 'about', component: AboutComponent, data: { title: 'About'}},
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us'}},
  { path: 'reserve', component: ReserveComponent, data: { title: 'Reserve An Aussie'}},
  { path: 'puppies', component: PetsComponent, data: { title: 'Available Aussies'}},
  { path: 'policies', component: PolicyComponent, data: { title: 'Reservation Policy'}},
  { path: 'shipping-policy', component: ShippingComponent},
  { path: 'reviews', component: ReviewsComponent, data: { title: 'Customer Feedback'}},
  { path: 'puppy/:id', component: PetComponent},
  { path: 'search/gender/:sex/age/:age', component: SearchComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
