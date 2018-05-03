import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

  takeABeer(beerId: number) {
    // make BE request to reduce quantity of this beer by 1
    // update FE quantity with BE response
  }

}
