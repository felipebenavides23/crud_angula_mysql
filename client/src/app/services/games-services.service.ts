import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../models/Games.modul';

@Injectable({
  providedIn: 'root',
})
export class GamesServicesService {
  api_url: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(`${this.api_url}/games`);
  }

  getGamesId(id: string) {
    return this.http.get(`${this.api_url}/games/${id}`);
  }

  guardarGame(games: Games) {
    return this.http.post(`${this.api_url}/games`, games);
  }

  eliminarGame(id: String) {
    return this.http.delete(`${this.api_url}/games/${id}`);
  }

  editarGames(games: Games, id: string) {
    return this.http.put(`${this.api_url}/games/${id}`, games);
  }
}
