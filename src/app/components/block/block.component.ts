import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() movie: Movie;
  public inWatchlist:Boolean;

  constructor(private _watchlist:WatchlistService) {
  }

  ngOnInit() {
      this.inWatchlist = this._watchlist.movieInWatchlist(this.movie);
  }

  addToWatchlist(movie:Movie) {
      return this._watchlist.addToWatchlist(movie);
  }
}
