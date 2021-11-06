import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { PetStorageService } from '../../services/pet.storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscribePets: Subscription;
  pets: Pet[] = [];
  genderSearch: string;
  ageSearch: number;

  constructor(
    private petService: PetService,
    private petStorageService: PetStorageService,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
    // this.petStorageService.fetchPets();
    // this.subscribePets = this.petService.petsChanged.subscribe( elements => {
    //   this.pets = elements;
    // })
    this.pets = this.petService.getPets();
  }

  changeHeartState(pet: Pet): void {
    pet.liked = !pet.liked ? true : false;
  }

  // ngOnDestroy() {
  //   this.subscribePets.unsubscribe();
  // }

  search() {
    this.router.navigate(['/search', 'gender', this.genderSearch, 'age', this.ageSearch])
  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }

}
