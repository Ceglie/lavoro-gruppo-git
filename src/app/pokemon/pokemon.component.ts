import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../models/pokemon.models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  id: string = '';
  pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private apiService: PokemonService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getPokemonID();
    });
  }

  getPokemonID() {
    this.apiService.getPokemonID(this.id).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}
