import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pets: Pet[] = [];
  gender: string;
  age: number;
  liked: boolean = false;
  empty: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Search Result');
    this.route.params.subscribe( params => {
      this.gender = params['sex'];
      this.age = params['age'];
      this.pets = this.petService.searchByGenderAndAge(this.gender, this.age);
      if (this.pets.length == 0) {
        this.empty = true;
      }
    })

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  changeHeartState(): void {
    this.liked = !this.liked;
  }

}
