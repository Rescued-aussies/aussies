import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { $, element } from "protractor";
import { map } from 'rxjs/operators';

import { Pet } from "../models/pet.model";
import { PetService } from "./pet.service";

@Injectable({
    providedIn: 'root'
})
export class PetStorageService {


    constructor (
        private http: HttpClient,
        private petService: PetService
    ) {}

    storePets() {
        const pets = this.petService.getPets();
        console.log(pets)
        this.http.put(
            'https://pet-data-storage-default-rtdb.firebaseio.com/aussies.json',
            pets
        ).subscribe( response => {
            console.log(response)
        })
    }

    updatePet(givenPet: Pet) {
        let startUrl: string = 'https://pet-data-storage-default-rtdb.firebaseio.com/aussies/';
        let passedUrl: string = startUrl + givenPet.databaseID + '.json'
        this.http.patch(
            `${passedUrl}`,
            {
                "id": givenPet.id,
                "name": givenPet.name,
                "gender": givenPet.gender,
                "age": givenPet.age,
                "ageNumber": givenPet.ageNumber,
                "image": givenPet.image,
                "price": givenPet.price,
                "registered": givenPet.registered,
                "description": givenPet.description
            }
        ).subscribe( response => {
            console.log(response);
        })
    
    }

    private fetchInnerPets() {
        return this.http.get<Pet[]>(
            'https://pet-data-storage-default-rtdb.firebaseio.com/aussies.json'
        ).pipe(
            map( (responseData) => {
                const postsArray = []
                for ( const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({...responseData[key], databaseID: key})
                    }
                }
                return postsArray;
            })
        );
    }

    postPet(givenPet: Pet) {
        this.http.post(
            'https://pet-data-storage-default-rtdb.firebaseio.com/aussies.json',
            givenPet
        ).subscribe( response => {
            console.log(response)
        })
    }

    fetchPets() {
        return this.http.get<Pet[]>(
            'https://pet-data-storage-default-rtdb.firebaseio.com/aussies.json'
        ).pipe(
            map( (responseData) => {
                const postsArray = [];
                for ( const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({...responseData[key], databaseID: key});
                    }
                }
                return postsArray;
            })
        ).subscribe( (elements: Pet[]) => {
            this.petService.setPets(elements);
        })
    }

    deletePet(givenPet: Pet) {
        let startUrl: string = 'https://pet-data-storage-default-rtdb.firebaseio.com/aussies/';
        let passedUrl: string = startUrl + givenPet.databaseID + '.json';
        console.log(givenPet.databaseID);
        console.log(passedUrl);
        this.http.delete(`${passedUrl}`).subscribe( response => {
            console.log(response);
        })
    }

    removePet(givenPet: Pet) {
        this.fetchInnerPets().subscribe( (elements: Pet[]) => {
            let newpets: Pet[] = [];
            elements.forEach( element => {
                if (element.id != givenPet.id) {
                    newpets.push(element)
                }
            });
            this.http.put(
                'https://pet-data-storage-default-rtdb.firebaseio.com/aussies.json',
                newpets
            ).subscribe( Response => {
                console.log(Response)
            })
        })
    }
}