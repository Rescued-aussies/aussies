import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScriptService } from './services/script.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { StoreEditComponent } from './components/store-edit/store-edit.component';
import { PetService } from './services/pet.service';
import { PetStorageService } from './services/pet.storage.service';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { AboutComponent } from './components/about/about.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PolicyComponent } from './components/policy/policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { TransferHttpCacheModule } from "@nguniversal/common";
import { TransferHttpModule } from "@gorniv/ngx-universal";
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    StoreEditComponent,
    PetsComponent,
    PetComponent,
    ContactComponent,
    ReserveComponent,
    AboutComponent,
    ReviewsComponent,
    PolicyComponent,
    SearchComponent,
    ShippingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgtUniversalModule,
    AppRoutingModule,
    TransferHttpCacheModule,
    TransferHttpModule

  ],
  providers: [
    ScriptService,
    PetService,
    ApiService,
    PetStorageService
  ],
})
export class AppModule { }
