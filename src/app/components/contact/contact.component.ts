import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Contact } from '../../models/api/contact';
import { ApiService } from '../../services/api.service';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet.model';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  pets: Pet[] = [];
  buttonMsg: string = 'Submit';
  isLoading: boolean = false;
  contact: Contact = new Contact();
  constructor(
    private apiService: ApiService,
    private petService: PetService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    this.titleService.setTitle('Contact Us');
    this.pets = this.petService.getPets()
  }

  submit() {
    this.buttonMsg = "Please Wait!..."
    this.isLoading = true;
    this.apiService.contact(this.contact)
    .subscribe((data: any) => {
      this.isLoading = true;
      Swal({
        title: 'Thanks!',
        text: 'Thank you! Your message has been received. We will contact you as soon as possible',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#614327'
      })
      this.contact = new Contact();
      this.isLoading = false;
      this.buttonMsg = "Submit!";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to send message. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok!',
          confirmButtonColor: '#614327'
        })
        this.buttonMsg = "Submit!";
      });

  }

}
