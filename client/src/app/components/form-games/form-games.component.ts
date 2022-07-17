import { GamesServicesService } from './../../services/games-services.service';
import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/Games.modul';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-games',
  templateUrl: './form-games.component.html',
  styleUrls: ['./form-games.component.css'],
})
export class FormGamesComponent implements OnInit {
  gamesform: Games = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    fechacreacion: new Date(),
  };

  constructor(
    private GamesServices: GamesServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  crearJuego() {
    delete this.gamesform.fechacreacion;
    this.GamesServices.guardarGame(this.gamesform).subscribe(
      (res) => {
        console.log('todo correcto');
        this.router.navigate(['listaGames']);
      },

      (err) => console.log(err)
    );
  }
}
