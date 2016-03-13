import {Component} from 'angular2/core';

interface Hero {
	id: number;
	name: string;
}
@Component({
	selector: 'my-app',
	template: `
		<h1>{{title }}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="#hero of heroes">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<h2>{{hero.name}} details!</h2>
		<div><label>Id: </label>{{hero.id}}</div>
		<div>
			<label>Name: </label>
			<div class="inline"><input [(ngModel)]="hero.name" placeholder="name"></div>
		</div>
	`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
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
			background-color: #BBD8DC !important;
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
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`]
})
export class AppComponent {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	public heroes = HEROES;
}
var HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];
