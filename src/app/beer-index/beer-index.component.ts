import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { HttpClient } from '@angular/common/http';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-beer-index',
  templateUrl: './beer-index.component.html',
  styleUrls: ['./beer-index.component.css']
})
export class BeerIndexComponent implements OnInit {
  beers: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const beerIndexUrl = 'http://localhost:3000/beers';

    this.http.get(beerIndexUrl)
      .subscribe(response => {
        this.beers = response;
      });
  }

}
