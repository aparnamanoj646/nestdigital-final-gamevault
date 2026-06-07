import { Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Cards } from "../../components/cards/cards";

@Component({
  selector: 'app-home',
  imports: [Carousel, Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
