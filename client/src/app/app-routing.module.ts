import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormGamesComponent } from './components/form-games/form-games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

const routes: Routes = [
  { path: '', component: GamesListComponent },
  { path: 'listaGames', component: GamesListComponent },
  { path: 'formulariogame', component: FormGamesComponent },
  { path: 'edit/:id', component: FormGamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
