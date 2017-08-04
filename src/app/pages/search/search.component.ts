import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../services/movie-db.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchStr:string;
  public results: Movie[];

  constructor(private _movieService: MovieDbService) { }

  ngOnInit() {
  }

  search() {
    this._movieService.search(this.searchStr)
        .subscribe(res => this.results = res.results);
  }
}
