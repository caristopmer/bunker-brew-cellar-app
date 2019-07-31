import { Component, OnInit } from '@angular/core';
import { Beer, Brewery, Style } from '../models';
import { HttpClient } from '@angular/common/http';

import { BACKENDAPIURL, routeConstants } from '../constants';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {
  addBeerForm: FormGroup;
  breweriesList: Array<Brewery>;
  stylesList: Array<Style>;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  async ngOnInit() {
    this.addBeerForm = this.formBuilder.group({
      name: [ '' , [Validators.required]],
      brewery_id: [ '', [Validators.required]],
      abv: [ '', [Validators.required]],
      quantity: [ 6, [Validators.required]],
      description: [ '', [Validators.required]],
      style_id: [ '', [Validators.required]]
    });

    await this.initializeAsyncData();
  }

  async initializeAsyncData() {
    const breweriesUrl = BACKENDAPIURL + 'breweries';
    this.http.get<Array<Brewery>>(breweriesUrl).subscribe(response => {
      this.breweriesList = response;
    });
    const stylesUrl = BACKENDAPIURL + 'styles';
    this.http.get<Array<Style>>(stylesUrl).subscribe(response => {
      this.stylesList = response;
    });
  }

  addBeerFormSubmitted() {
    const addBeerUrl = BACKENDAPIURL + 'beers';
    const payload = this.addBeerForm.getRawValue();

    this.http.post<Beer>(addBeerUrl, payload)
      .subscribe(response => {
        this.router.navigate([routeConstants.homeRoute]);
      });
  }
}
