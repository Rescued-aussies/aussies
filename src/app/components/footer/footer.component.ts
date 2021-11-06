import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Contact } from '../../models/api/contact';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  buttonMsg: string = 'Subscribe';
  isLoading: boolean = false;
  contact: Contact = new Contact();
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.buttonMsg = "Please Wait!..."
    this.isLoading = true;
    this.contact.name = "Subscription!";
    this.contact.country = "Subscription!";
    this.contact.address1 = "Subscription!";
    this.contact.phone = "Subscription!"
    this.apiService.contact(this.contact)
    .subscribe((data: any) => {
      this.isLoading = true;
      Swal({
        title: 'Thanks!',
        text: 'Thank you! We received your email. We will keep you up-to-date.',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#614327'
      })
      this.contact = new Contact();
      this.isLoading = false;
      this.buttonMsg = "Subscribe!";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to subscribe. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok!',
          confirmButtonColor: '#614327'
        })
        this.buttonMsg = "Subscribe!";
      });

  }

}
