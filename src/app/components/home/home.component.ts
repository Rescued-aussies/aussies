import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  liked: boolean;
  genderSearch: string;
  ageSearch: number;

  constructor(
    private petService: PetService,
    private petStorageService: PetStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.petStorageService.fetchPets();
    // this.subscribePets = this.petService.petsChanged.subscribe( elements => {
    //   this.pets = elements;
    // })
    this.pets = this.petService.getPets();
    this.liked = false;
  }

  changeHeartState(): void {
    this.liked = !this.liked;
  }

  // ngOnDestroy() {
  //   this.subscribePets.unsubscribe();
  // }

  search() {
    this.router.navigate(['/search', 'gender', this.genderSearch, 'age', this.ageSearch])
  }

}
