import { Component } from '@angular/core';
import { Card1 } from '../../components/card1/card1';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-favourites',
  imports: [Card1, RouterLink],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class Favourites {

  data:any[] = [];

  ngOnInit(){

    this.data =
      JSON.parse(localStorage.getItem('favorites') || '[]');

  }

}