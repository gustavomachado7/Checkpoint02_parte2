import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonsUrl = 'https://demo6461745.mockable.io/pokemon';
  constructor(private http: HttpClient) {}

  pokemons: Pokemon[] = [];

  listar(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl) as Observable<Pokemon[]>;
    //return this.pokemons;
  }

  adicionar(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }
}
