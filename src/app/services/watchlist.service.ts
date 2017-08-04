import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../models/Movie';
import 'rxjs/add/operator/map';

@Injectable()
export class WatchlistService {
  public watchlist:any[] = [];

  constructor(private _http:Http) { }

  addToWatchlist(movie: Movie) {
      if(!this.movieInWatchlist(movie)) {
          this.watchlist.push(movie);
          this.setItem(this.watchlist);
      }
  }

  fetch() {
      if(!this.watchlist.length) {
          this.watchlist = this.getItem();
      }

      return this.watchlist;
  }

  setItem(watchlist:any[]) {
      window.localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  getItem() {
      return JSON.parse(window.localStorage.getItem('watchlist')) || [];
  }

  movieInWatchlist(movie: Movie):Boolean {
      return !!(this.watchlist.find(m => m.title === movie.title));
  }

}
