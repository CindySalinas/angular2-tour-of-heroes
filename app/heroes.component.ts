import {Component, OnInit} from 'angular2/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
	selector: 'my-heroes',
	inputs: ['hero'],
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="#hero of heroes"
				[class.selected]="hero === selectedHero"
				(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<my-hero-detail [hero]="selectedHero">
		</my-hero-detail>
		<div *ngIf="selectedHero">
			<h2>{{selectedHero.name | uppercase}} is my hero</h2>
			<button (click)="gotoDetail()">View Details</button>
		</div>
	`,
	styles: [`
		.selected {
			background-color: #40BFF8 !important;
			color: white;
		}
		.heroes {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 10em;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em 0;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroes li.selected:hover {
			background-color: #138595 !important;
			color: white;
		}
		.heroes li:hover {
			color: #ff7676;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #ff7676;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -5px;
			height: 1.9em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
	public title = 'Tour of Heroes';
	public selectedHero: Hero;
	heroes: Hero[];
	constructor(private _heroService: HeroService) { }
	getHeroes(){
		this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
}
