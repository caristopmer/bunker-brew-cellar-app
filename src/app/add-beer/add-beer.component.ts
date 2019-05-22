import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { HttpClient } from '@angular/common/http';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

import { BACKENDAPIURL } from '../constants';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {
  beers: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // const beerIndexUrl = BACKENDAPIURL + 'beers';

    // this.http.get(beerIndexUrl)
    //   .subscribe(response => {
    //     this.beers = response;
    //   });
  }

}
