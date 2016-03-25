import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
	selector: 'my-heroes',
	inputs: ['hero'],
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
	public selectedHero: Hero;
	heroes: Hero[];
	constructor(
		private _router: Router,
		private _heroService: HeroService) { }
	getHeroes(){
		this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}
