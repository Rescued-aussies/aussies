import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { PetStorageService } from 'src/app/services/pet.storage.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.scss']
})
export class StoreEditComponent implements OnInit{

   newPetForm: FormGroup
  pets: Pet[] = []
  pet = new Pet()
  subscribePets: Subscription
  id: string
  submit: string
  editMode: boolean
  
  constructor(
    private petService: PetService,
    private petStorageService: PetStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != 'new') {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
      this.formInit();
    })
    this.submit = 'Submit!';;
  }

  private formInit() {
    let idInit = '';
    let nameInit = '';
    let genderInit = '';
    let ageInit = '';
    let ageNumInit = 0;
    let priceInit = 0;
    let imageInit = '';
    let registeredInit = '';
    let descriptionInit = '';

    if (this.editMode) {
      this.petStorageService.fetchPets();
      this.subscribePets = this.petService.petsChanged.subscribe( elements => {
        this.pets = elements;
        this.pets.forEach( pet => {
          if (pet.id == this.id) {
            this.pet = pet;
          }
        });
        console.log(this.pet);
        this.newPetForm = new FormGroup({
          databaseID: new FormControl(this.pet.databaseID),
          id: new FormControl(this.pet.id, Validators.required),
          name: new FormControl(this.pet.name, Validators.required),
          gender: new FormControl(this.pet.gender, Validators.required),
          age: new FormControl(this.pet.age, Validators.required),
          ageNumber: new FormControl(this.pet.ageNumber, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ]),
          image: new FormControl(this.pet.image, Validators.required),
          price: new FormControl(this.pet.price, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ]),
          registered: new FormControl(this.pet.registered, Validators.required),
          description: new FormControl(this.pet.description, Validators.required)
        })
      });
      
    } else {
      this.newPetForm = new FormGroup({
        id: new FormControl(idInit, Validators.required),
        name: new FormControl(nameInit, Validators.required),
        gender: new FormControl(genderInit, Validators.required),
        age: new FormControl(ageInit, Validators.required),
        ageNumber: new FormControl(ageNumInit, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        image: new FormControl(imageInit, Validators.required),
        price: new FormControl(priceInit, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        registered: new FormControl(registeredInit, Validators.required),
        description: new FormControl(descriptionInit, Validators.required)
      })
    }
  }

  onSubmit() {
    this.submit = 'Loading....'
    if (this.editMode) {
      console.log(this.newPetForm.value.id)
      console.log(this.newPetForm.value.databaseID)
      this.petStorageService.updatePet(this.newPetForm.value)
    } else {
      this.petStorageService.postPet(this.newPetForm.value)
      this.newPetForm.reset()
    }

    this.submit = 'Submit'
  }

}
