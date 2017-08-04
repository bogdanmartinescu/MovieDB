import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../services/movie-db.service';
import { Movie } from '../../models/Movie';
import { BlockComponent } from '../../components/block/block.component';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  public popular:Movie[];

  constructor(private _movieService: MovieDbService) {}

  ngOnInit() {
      this._movieService.getPopular()
          .subscribe(res => this.popular = res.results);
  }

}
