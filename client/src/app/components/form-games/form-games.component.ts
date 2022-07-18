import { Games } from './../../models/Games.modul';
import { GamesServicesService } from './../../services/games-services.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  crearEditar: boolean = false;
  titulo: string = 'Agregar Juego';

  constructor(
    private GamesServices: GamesServicesService,
    private router: Router,
    private acrouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.acrouter.snapshot.params;

    if (params['id']) {
      this.crearEditar = true;
      this.titulo = 'Editar Juego';
      this.GamesServices.getGamesId(params['id']).subscribe((res) => {
        if (Object.entries(res).length == 0) {
          console.log('este valor no se puede traer');
          this.router.navigate(['listaGames']);
        } else {
          let respuesta = res[0];
          console.log(respuesta);
          // las variable de la base de datos tiene que ser igual a la que se ponen en el modelo
          this.gamesform = respuesta;
          this.gamesform.titulo = respuesta.title;
          this.gamesform.imagen = respuesta.image;
          this.gamesform.fechacreacion = respuesta.create_game;
        }
      });
    }
  }

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

  editarJuego() {
    const id = this.acrouter.snapshot.params;
    this.GamesServices.editarGames(this.gamesform, id['id']).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['listaGames']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
