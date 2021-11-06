import { LocationStrategy, ViewportScroller, Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Scroll, Event, NavigationStart } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, pairwise, first } from 'rxjs/operators';
import { PetStorageService } from './services/pet.storage.service';
import { ScriptService } from './services/script.service';
// import 'rxjs/add/operator/pairwise';
// import 'rxjs/add/operator/first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // private _routeScrollPositions: {[url: string]: number} = {};
  // private _subscriptions: Subscription[] = [];
  constructor(private router: Router, private location: Location,
    private scriptService: ScriptService

  ) {
  }

  ngOnInit() : void{
    this.scriptService.loadScript('main');

    // this._subscriptions.push(
    //   // save scroll position on route change
    //   this.router.events.pipe(pairwise()).subscribe(([prevRouteEvent, currRouteEvent]) => {
    //     if (prevRouteEvent instanceof NavigationEnd && currRouteEvent instanceof NavigationStart) {
    //       // url path without parameters
    //       let urlPath = (prevRouteEvent.urlAfterRedirects || prevRouteEvent.url ).split(';',1)[0];
    //       this._routeScrollPositions[urlPath] = window.pageYOffset;
    //     }
    //   })
    // );
    // // restore scroll position on back or forward
    // this.location.subscribe(event => {
    //     // back or forward, wait for router navigation end
    //     let routerNavigationEnd = this.router.events.pipe(first(event => event instanceof NavigationEnd))
    //     .subscribe((navigationEndEvent: NavigationEnd) => {
    //       // url path without parameters
    //       let urlPath = (navigationEndEvent.urlAfterRedirects || navigationEndEvent.url).split(';',1)[0];
    //       console.log('scroll to ', this._routeScrollPositions[urlPath] || 0)
    //       setTimeout(() => {
    //         window.scrollTo(0, this._routeScrollPositions[urlPath] || 0);
    //       }, 0);
    //     });
    // });
  }

  // ngOnDestroy() {
  //   this._subscriptions.forEach(subscription => subscription.unsubscribe());
  // }


}
