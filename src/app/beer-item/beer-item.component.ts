import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../beer';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;
  restockForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.restockForm = this.formBuilder.group({
      restockQuantity: [ 6, [Validators.required]]
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
    const payload = this.restockForm.getRawValue();

    this.http.put(restockUrl, payload)
      .subscribe(response => {
        this.beer.quantity = response;
      });
  }

}
