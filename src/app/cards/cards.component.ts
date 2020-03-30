import { Component, OnInit } from '@angular/core';

const CARDS = [
  {
    title: 'Supervisor',
    body: 'Monitors activity to identify project roadblocks',
    image: 'assets/images/cards/icon-supervisor.svg',
    borderColor: 'border--cyan'
  }, {
    title: 'Team Builder',
    body: 'Scans our talent network to create the optimal team for your project',
    image: 'assets/images/cards/icon-team-builder.svg',
    borderColor: 'border--red'
  }, {
    title: 'Karma',
    body: 'Regularly evaluates our talent to ensure quality',
    image: 'assets/images/cards/icon-karma.svg',
    borderColor: 'border--orange'
  }, {
    title: 'Calculator',
    body: 'Uses data from past projects to provide better delivery estimates',
    image: 'assets/images/cards/icon-calculator.svg',
    borderColor: 'border--blue'
  },
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [ './cards.component.scss' ],
})
export class CardsComponent implements OnInit {
  cards = CARDS;

  constructor() { }

  ngOnInit() {
  }

}
