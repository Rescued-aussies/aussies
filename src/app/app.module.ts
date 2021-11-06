import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ScriptService } from "./services/script.service";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { TransferHttpModule } from "@gorniv/ngx-universal";
import { PetService } from "./services/pet.service";
import { PetComponent } from "./components/pet/pet.component";
import { PetsComponent } from "./components/pets/pets.component";
import { PolicyComponent } from "./components/policy/policy.component";
import { ReserveComponent } from "./components/reserve/reserve.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { SearchComponent } from "./components/search/search.component";
import { ShippingComponent } from "./components/shipping/shipping.component";
import { StoreEditComponent } from "./components/store-edit/store-edit.component";
import { StoreComponent } from "./components/store/store.component";

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
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    TransferHttpCacheModule,
    TransferHttpModule
  ],
  providers: [ScriptService,
    PetService,
    ApiService,],
})
export class AppModule {}
