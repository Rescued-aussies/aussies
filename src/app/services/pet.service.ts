import { Injectable } from "@angular/core";
import { element } from "protractor";
import { Subject } from "rxjs";

import { Pet, PETS } from "../models/pet.model";

@Injectable({
    providedIn: 'root'
})
export class PetService {

    petsChanged = new Subject<Pet[]>();
    private pets: Pet[] = [];

    constructor() {
        PETS.forEach( element => {
            let pet = new Pet();
            pet.databaseID = element.databaseID;
            pet.id = element.id;
            pet.name = element.name;
            pet.age = element.age;
            pet.status = element.status;
            pet.WandH = element.WandH;
            pet.ageNumber = element.ageNumber;
            pet.gender = element.gender;
            pet.image = element.image;
            pet.price = element.price;
            pet.registered = element.registered;
            pet.description = element.description;
            pet.size = element.size;
            this.pets.push(pet);
        });
        this.pets.sort((a, b) => a.name.localeCompare(b.name));
    }

    getPets() {
        return this.pets.slice();
    }

    setPets(pets: Pet[]) {
        let givenPets: Pet[] = []
        pets.forEach( element => {
            let pet = new Pet();
            pet.databaseID = element.databaseID;
            pet.id = element.id;
            pet.name = element.name;
            pet.age = element.age;
            pet.ageNumber = element.ageNumber;
            pet.gender = element.gender;
            pet.image = element.image;
            pet.price = element.price;
            pet.reserve_fee = element.reserve_fee;
            pet.registered = element.registered;
            pet.description = element.description;
            pet.size = element.size;
            givenPets.push(pet);
        });
        this.pets = givenPets;
        this.petsChanged.next(this.pets.slice());
    }

    getPet(id: string) {
        let pet = new Pet();
        this.pets.forEach( element => {
            if(element.id.toLowerCase() === id.toLowerCase()) {
                pet = element;
            } 
        })
        return pet;
    }

    deletePet(pet: Pet) {
        let i = this.pets.indexOf(pet);
        this.pets = this.pets.splice(i, 1);
        this.petsChanged.next(this.pets)
    }

    searchByGenderAndAge(sex: string, age: number) {
        let result: Pet[] = [];
        this.pets.forEach( pet => {
            if (pet.gender.toLowerCase() == sex.toLowerCase()) {
                if (pet.ageNumber <= age) {
                    result.push(pet);
                }
            }
        })
        if ( result.length == 0) {
            this.pets.forEach( pet => {
                if (pet.gender.toLowerCase() == sex.toLowerCase()) {
                    result.push(pet);
                }
            })
        }
        return result;
    }
}