import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import { Cart } from '../../models/api/cart';
import { Checkout } from '../../models/api/checkout';
import { ShippingDetails } from '../../models/api/shippingDetails';
import { CartItem as ApiCartItem } from '../../models/api/cartItem';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { PetService } from '../../services/pet.service';
import { CartItem } from '../../models/cart-item';
import { Pet } from '../../models/pet.model';
import { Item } from '../../models/item';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  buttonMsg = 'Reserve Now!';
  isLoading = false;
  pets: Pet[] = new Array();
  pet: Pet;
  price: string;
  reserve: string;
  items: CartItem[] = new Array();
  chosen: string = '';
  shipping: ShippingDetails = new ShippingDetails();
  paymentOptions = ["Paypal", "Cashapp", "Zelle", "Applepay", "Venmo"];

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private petService: PetService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.shipping.paymentOption = this.paymentOptions[1]
      this.items = data;
      this.pets = this.petService.getPets()
      this.shipping = new ShippingDetails();
      if (this.items.length > 0) {
        this.pet = this.items[0].pet;
      } else {
        this.pet = null;
      }

      if (this.pet != null) {
        this.price = "Full Price: $" + this.pet.price;
        this.reserve = "To Reserve: $" + this.pet.reserve_fee;
      }
    })

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    !this.pet ? this.titleService.setTitle('Reserve Your Aussie') : this.titleService.setTitle('Reserve ' + this.pet.name)
  }

  submit() {
    this.isLoading = true;
    this.buttonMsg = "Please wait!....";
    if (this.items.length < 1) {
      Swal({
        title: 'Oops!',
        text: 'No puppy selected, please select a puppy before proceeding.',
        type: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#614327'
      })
      this.isLoading = false;
      this.buttonMsg = "Reserve Now!";
    } else {
      let checkout = new Checkout();
      let cart = new Cart()
      this.items.forEach((value: CartItem) => {
        let apiCartItem: ApiCartItem = new ApiCartItem();
        apiCartItem.petName = value.pet.name;
        apiCartItem.productTotal = value.pet.price
        apiCartItem.reserve_fee = value.pet.reserve_fee
        cart.cartItems.push(apiCartItem)
      })
      cart.grandTotal = this.cartService.total();
      checkout.cart = cart;
      checkout.shippingDetails = this.shipping;
      this.apiService.checkout(checkout)
        .subscribe((data: any) => {
          this.isLoading = true;
          this.shipping = new ShippingDetails()
          this.cartService.purge()
          Swal({
            title: 'Thanks!',
            text: 'Thank you! We took note of your request. We will contact you as soon as possible',
            type: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#614327'
          })
          this.isLoading = false;
          this.buttonMsg = "Reserve Now!";
        },
          (err: HttpErrorResponse) => {
            this.isLoading = false;
            Swal({
              title: 'Error!',
              text: 'Please! Make sure you are connected to the internet or fill the required fields.',
              type: 'warning',
              confirmButtonText: 'Ok!',
              confirmButtonColor: '#614327'
            })
            this.buttonMsg = "Reserve Now!";
          });
    }
  }

  onChange(event: string) {
    console.log(event);
    let item: Item = new Item();
    item.pet = this.petService.getPet(event);
    this.pet = item.pet;
    this.cartService.add(item);
  }

}
