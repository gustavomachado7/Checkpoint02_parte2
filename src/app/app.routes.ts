import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {EstadoComponent} from './components/estado/estado.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'ibge', component: EstadoComponent },
  { path: '**', component: HomeComponent },
];
