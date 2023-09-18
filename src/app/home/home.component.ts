import { Component } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pokemon: Pokemon[] = [];
  page: number = 1;
  per_page: number = 10;
  search: string = '';

  constructor(
    private apiService: PokemonService,
    private router: Router
  ) {
        this.getPokemon();
  }

  getPokemon() {
    this.apiService
      .getPokemon(String(this.page), String(this.per_page))
      .subscribe((data: Pokemon[]) => {
        this.pokemon = data;
      });
  }
  detail(id: string) {
    console.log(id);
    this.router.navigate(['/pokemon', id]);
  }
  prevPage() {
    if (this.page === 1) return;
    this.page--;
    this.getPokemon();
  }

  nextPage() {
    if (this.page === 20) return;
    this.page++;
    this.getPokemon();
  }
}
