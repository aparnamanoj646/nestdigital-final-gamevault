import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Fakeapi {

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get('https://www.freetogame.com/api/games');
  }

  getGameById(id:any) {
    return this.http.get(
      `https://www.freetogame.com/api/game?id=${id}`
    );
  }

}