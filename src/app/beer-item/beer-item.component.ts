import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;
  restockQuantity = 6;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.restockForm = this.formBuilder.group({
      businessname: [questionData.businessname || '', [Validators.required]]
      });
  }

  takeABeer(beerId: number) {
    const takeOneUrl = 'http://localhost:3000/beers/' + beerId + '/takeone';

    this.http.get(takeOneUrl)
      .subscribe(response => {
        this.beer.quantity = response;
      });
  }

  restockBeer(beerId: number) {
    const restockUrl = 'http://localhost:3000/beers/' + beerId + '/restock';

    this.http.put(restockUrl, {restockQuantity: parseInt(restockQuantity, 10)})
      .subscribe(response => {
        console.log(response);
        this.beer.quantity = response;
      });
  }

}
