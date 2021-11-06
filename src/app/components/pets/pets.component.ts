import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Pet[] = [];
  liked: boolean;

  constructor(
    private petService: PetService,
    private router: Router,
    private titleService: Title,
    private viewportScroller: ViewportScroller
  ) { 
    
  }

  ngOnInit() {
    // this.titleService.setTitle('Available Aussies.')
    this.pets = this.petService.getPets();
    this.liked = false;
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   window.scrollTo(0, 0)
    // });
  }

  changeHeartState(pet: Pet): void {
    pet.liked = !pet.liked ? true : false;
  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }

}
