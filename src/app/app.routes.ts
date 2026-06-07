import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Favourites } from './pages/favourites/favourites';
import { GameDetails } from './pages/game-details/game-details';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'games',
    component: Games
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: 'favourites',
    component: Favourites
  },

  {
    path: 'gamedetails/:id',
    component: GameDetails
  }

];