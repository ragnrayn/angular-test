import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  States = States;
  state: States = States.Description;
  isModalOpened: boolean = false;
  localMeals: [] | null = null;
}

export enum States {
  LocalMeals = 'localMeals',
  Meal = 'meal',
  Description = 'description'
}
