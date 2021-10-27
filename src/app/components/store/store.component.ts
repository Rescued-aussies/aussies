import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { PetStorageService } from 'src/app/services/pet.storage.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  pets: Pet[] = [];
  subscribePets: Subscription;
  liked: boolean;

  constructor(
    private petService: PetService,
    private petStorageService: PetStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.petStorageService.storePets();
    this.petStorageService.fetchPets();
    this.subscribePets = this.petService.petsChanged.subscribe( elements => {
      this.pets = elements;
      console.log(elements)
    })
    this.liked = false;
  }

  changeHeartState(): void {
    this.liked = !this.liked;
  }

  deletePet(pet: Pet) {
    this.petStorageService.removePet(pet);
    // this.petService.deletePet(pet);
    // this.ngOnInit();
    this.router.navigate([this.router.url])
    // console.log(pet)
  }

  ngOnDestroy() {
    this.subscribePets.unsubscribe()
  }

}
