import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FormGamesComponent } from './components/form-games/form-games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
// services
import { GamesServicesService } from './services/games-services.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormGamesComponent,
    GamesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GamesServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
