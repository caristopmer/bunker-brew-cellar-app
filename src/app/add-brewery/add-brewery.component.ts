import { Component, OnInit } from '@angular/core';
import { Brewery } from '../models';
import { HttpClient } from '@angular/common/http';

import { BACKENDAPIURL, routeConstants } from '../constants';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brewery',
  templateUrl: './add-brewery.component.html',
  styleUrls: ['./add-brewery.component.css']
})
export class AddBreweryComponent implements OnInit {
  addBreweryForm: FormGroup;
  breweriesList: Array<Brewery>;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  async ngOnInit() {
    this.addBreweryForm = this.formBuilder.group({
      name: [ '' , [Validators.required]],
      location: [ '', [Validators.required]]
    });

    // await this.initializeAsyncData();
  }

  async initializeAsyncData() {
    // look up current ones to see if they are duplicating?
  }

  addBreweryFormSubmitted() {
    const addBreweryUrl = BACKENDAPIURL + 'breweries';
    const payload = this.addBreweryForm.getRawValue();

    this.http.post<Brewery>(addBreweryUrl, payload)
      .subscribe(response => {
        this.router.navigate([routeConstants.homeRoute]);
      });
  }
}
