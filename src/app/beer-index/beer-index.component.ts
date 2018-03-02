import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-index',
  templateUrl: './beer-index.component.html',
  styleUrls: ['./beer-index.component.css']
})
export class BeerIndexComponent implements OnInit {
  beers: Array<any> = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const beerIndexUrl = 'http://localhost:3000/beers';

    this.http.get(beerIndexUrl)
      .subscribe(response => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          this.beers.push(
            {
              name: response[i].name,
              quantity: response[i].quantity,
              brewery: response[i].brewery_id
            }
          );
        }
      });





    // this.beers = [
    //   {
    //     name: 'this beer',
    //     quantity: 6,
    //     brewery: 'Dogfish Head'
    //   },
    //   {
    //     name: 'that beer',
    //     quantity: 3,
    //     brewery: 'Yo dawg brewing co.'
    //   },
    //   {
    //     name: 'another beer',
    //     quantity: 2,
    //     brewery: 'Miller Brewing Company'
    //   },
    //   {
    //     name: 'here is a different beer',
    //     quantity: 9,
    //     brewery: 'Three Floyds Brewing Company'
    //   },
    // ];
  }

}
