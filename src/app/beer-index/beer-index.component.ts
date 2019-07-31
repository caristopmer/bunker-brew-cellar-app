import { Component, OnInit } from '@angular/core';
import { Beer } from '../models';
import { HttpClient } from '@angular/common/http';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

import { BACKENDAPIURL } from '../constants';

@Component({
  selector: 'app-beer-index',
  templateUrl: './beer-index.component.html',
  styleUrls: ['./beer-index.component.css']
})
export class BeerIndexComponent implements OnInit {
  beers: Array<Beer>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const beerIndexUrl = BACKENDAPIURL + 'beers';

    this.http.get<Array<Beer>>(beerIndexUrl)
      .subscribe(response => {
        this.beers = response;
      });
  }

}
