import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularComponent } from './pages/popular/popular.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';

const appRoutes:Routes = [
    {
        path: 'popular',
        component: PopularComponent
    },
    {
        path: 'watchlist',
        component: WatchlistComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: '**',
        redirectTo: '/popular',
        pathMatch: 'full'
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
