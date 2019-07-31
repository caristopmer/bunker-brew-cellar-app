import { Component, OnInit } from '@angular/core';
import { Style } from '../models';
import { HttpClient } from '@angular/common/http';

import { BACKENDAPIURL, routeConstants } from '../constants';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-style',
  templateUrl: './add-style.component.html',
  styleUrls: ['./add-style.component.css']
})
export class AddStyleComponent implements OnInit {
  addStyleForm: FormGroup;
  stylesList: Array<Style>;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  async ngOnInit() {
    this.addStyleForm = this.formBuilder.group({
      name: [ '' , [Validators.required]]
    });

    // await this.initializeAsyncData();
  }

  async initializeAsyncData() {
    // Load up current styles to check if they are adding a duplicate?
  }

  addStyleFormSubmitted() {
    const addStyleUrl = BACKENDAPIURL + 'styles';
    const payload = this.addStyleForm.getRawValue();

    this.http.post<Style>(addStyleUrl, payload)
      .subscribe(response => {
        this.router.navigate([routeConstants.homeRoute]);
      });
  }
}
