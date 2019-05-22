import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BeerIndexComponent } from './beer-index/beer-index.component';
import { BeerItemComponent } from './beer-item/beer-item.component';
import { AddBeerComponent } from './add-beer/add-beer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'index.html', redirectTo: 'Home', pathMatch: 'full' },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: BeerIndexComponent },
  { path: 'beers/new', component: AddBeerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BeerIndexComponent,
    BeerItemComponent,
    AddBeerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
