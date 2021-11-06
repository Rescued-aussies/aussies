import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Item } from '../../models/item';
import { Pet } from '../../models/pet.model';
import { CartService } from '../../services/cart.service';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  pet: Pet = new Pet();
  id: string = '';
  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      this.pet = this.petService.getPet(this.id);
      if (!this.pet) {
        this.router.navigateByUrl('/');
      }
    });

    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   window.scrollTo(0, 0)
    // });
    this.titleService.setTitle( this.pet.name + " | " + this.pet.size + " Aussie")
  }

  reservePet() {
    let item: Item = new Item();
    item.pet = this.pet;
    this.cartService.add(item);
    // this.router.navigateByUrl("/reserve");
  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }

}
