import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/Pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemons: Pokemon[] = [];
  constructor(private PokemonService: PokemonService) {}

  listar(): void {
    this.PokemonService.listar().subscribe((listPokemon) => (this.pokemons = listPokemon));
  }

  ngOnInit(): void {
    this.listar();
  }
}
