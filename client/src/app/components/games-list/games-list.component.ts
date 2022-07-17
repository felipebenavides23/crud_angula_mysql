import { Component, OnInit } from '@angular/core';
import { GamesServicesService } from '../../services/games-services.service';
import { Games } from '../../models/Games.modul';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  gamesentrada: any = [];

  constructor(private gameService: GamesServicesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(
      (res) => {
        this.gamesentrada = res;
      },
      (err) => console.log(err + 'ERROR')
    );
  }

  eliminarJuego(id: string) {
    this.gameService.eliminarGame(id).subscribe(
      (res) => {
        console.log(res);
        this.getGames();
      },
      (err) => {
        console.log(err);
        console.log('estros es el erro ');
      }
    );
  }
}
