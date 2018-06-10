import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  providers: [
  	HeroesService
  ]
})
export class BuscadorComponent implements OnInit {

	heroes:any[] = [];
	termino:string;

  constructor(
  	private _activatedRoute: ActivatedRoute,
  	private _heroesService: HeroesService
  	) { }

  ngOnInit() {
  	this._activatedRoute.params.subscribe(params => {
  		this.termino = params['termino'];
  		this.heroes = this._heroesService.searchHeroe(params['termino']);
  		console.log(this.heroes);
  	});
  }

}
