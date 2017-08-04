import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { Movie } from '../../models/Movie';
import { BlockComponent } from '../../components/block/block.component';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  public watchlist;

  constructor(private _watchlistService: WatchlistService) { }

  ngOnInit() {
      this.watchlist = this._watchlistService.fetch();
  }

}
