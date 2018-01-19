import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo is Ready!</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let thisAnimal of animals">{{thisAnimal.species}} is named "{{thisAnimal.name}}"</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Current Beasts';

  animals: Animal[] = [
    new Animal("shrimp", "Seu"),
    new Animal("shark", "Sano"),
    new Animal("chickadee", "Chickadee"),
  ];

}

export class Animal {
  constructor(public species: string, public name: string) { }
}
