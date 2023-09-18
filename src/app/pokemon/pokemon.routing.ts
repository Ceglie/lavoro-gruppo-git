import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "./pokemon.component";


export const pokemonRoutes: Routes = [
    {
        path:'', //utenti
        component: PokemonComponent,
    },
    
];

export const pokemonRouting = RouterModule.forChild(pokemonRoutes);