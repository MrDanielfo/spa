import { Component } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {

	heroe:any = {

	};


  constructor(
  	private _activatedRoute: ActivatedRoute,
  	private _heroesService: HeroesService,

  	) { 

  	this._activatedRoute.params.subscribe(params =>  {
  		this.heroe = this._heroesService.getHeroe(params['id']);
  	});
		
	}

  ngOnInit() {
  }

}
