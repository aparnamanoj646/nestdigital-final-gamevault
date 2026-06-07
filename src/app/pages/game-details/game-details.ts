import { ChangeDetectorRef, Component } from '@angular/core';
import { Fakeapi } from '../../services/fakeapi';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css',
})
export class GameDetails {

  gamedetails: any;
  id: any;

  constructor(
    private api: Fakeapi,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.api.getGameById(this.id).subscribe((res: any) => {
      this.gamedetails = res;
      this.cdr.detectChanges();
    });

  }

  addToFavorites() {

    let favorites =
      JSON.parse(localStorage.getItem('favorites') || '[]');

    favorites.push(this.gamedetails);

    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites)
    );

    alert('Game added to favorites!');
  }

}
