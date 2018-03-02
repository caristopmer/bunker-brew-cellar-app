import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-index',
  templateUrl: './beer-index.component.html',
  styleUrls: ['./beer-index.component.css']
})
export class BeerIndexComponent implements OnInit {
  beers: Array<any>;

  constructor() { }

  ngOnInit() {
    this.beers = [
      {
        name: 'this beer',
        quantity: 6,
        brewery: 'Dogfish Head'
      },
      {
        name: 'that beer',
        quantity: 3,
        brewery: 'Yo dawg brewing co.'
      },
      {
        name: 'another beer',
        quantity: 2,
        brewery: 'Miller Brewing Company'
      },
      {
        name: 'here is a different beer',
        quantity: 9,
        brewery: 'Three Floyds Brewing Company'
      },
    ];
  }

}
