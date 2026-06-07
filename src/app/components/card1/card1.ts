import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card1',
  imports: [RouterLink],
  templateUrl: './card1.html',
  styleUrl: './card1.css',
})
export class Card1 {

  @Input() game:any;

}