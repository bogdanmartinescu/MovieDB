import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopularComponent } from './pages/popular/popular.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';
import { BlockComponent } from './components/block/block.component';

import { MovieDbService } from './services/movie-db.service';
import { WatchlistService } from './services/watchlist.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularComponent,
    WatchlistComponent,
    FavoritesComponent,
    SearchComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [MovieDbService, WatchlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
