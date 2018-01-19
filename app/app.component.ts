import { Component } from '@angular/core';
// import { AnimalsListComponent } from './animals-list.component'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo is Ready!</h1>
    <h3>{{currentFocus}}</h3>

    <ul>
      <li (click)="animalClicked(currentAnimal)" *ngFor="let currentAnimal of animals">"{{currentAnimal.name}}" the {{currentAnimal.species}} is present!
      <button (click)="editAnimal()"> Edit!</button></li>
    </ul>
    <div>
    <h3>{{selectedAnimal.name}}</h3>
    <p>{{selectedAnimal.species}}</p>
    <h3>Edit Animal</h3>
    <label>Species</label>
    <input [(ngModel)]="selectedAnimal.species">
    </div>

  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Current Beasts';
  animals: Animal[] = [
    new Animal("Pomeranian", "Ameribo Vespoochi", 2, "Carnivore", "Canine Carnival", 5, "male", "food", "people"),
    new Animal("European Central Boar", "Piggi Longsmockings", 1, "Omnivore", "The Boar Moors", 5, "female", "food", "people"),
    new Animal("Siberian Chipmunk", "Radimir Putin", 3, "Omnivore", "Rodent Roundabout", 5, "male", "food", "people"),
    new Animal("Holstein Friesian Cattle", "Joan Henrietta", 1, "Herbivore", "Farmhand Farmy's Fun Farm", 5, "female", "food", "people"),
    // new Animal("Amur Tiger", "El Tigre, El Mejor Tigre", 7, "Carnivore", "Feline Festivale", 5, "male", "food", "people"),
    // new Animal("Dwarf Hotot", "Empress Maria Theresa the Hopsburg", 3,  "Herbivore", "Rodent Roundabout", 5, "female", "food", "people"),
    // new Animal("Komodo Dragon", "Elizabeth", 12, "Carnivore", "Danger Zone", 5, "female", "food", "people"),
    // new Animal("Ball Python", "Sssssimple Sssssimon", 9, "Carnivore", "Snakeland Land of Snakes", 5, "male", "food", "people"),
    // new Animal("Palomino", "Don Palamino", 5, "Herbivore", "Farmhand Farmy's Fun Farm", 5, "male", "food", "people"),
    // new Animal("Dall Sheep", "U Dun Goof'd", 4, "Herbivore", "The Mountains", 5, "male", "food", "people"),
    // new Animal("Proboscis Monkey", "Innuendo", 7, "Omnivore", "Danger Zone", 5, "male", "food", "people"),
    // new Animal("Black-Capped Chickadee", "Rooster", 2, "Omnivore", "The Mountains", 5, "female", "sunflower seeds", "people"),
  ];
  selectedAnimal: Animal = this.animals[0];

  editAnimal(){
    console.log("click!")
  }

  animalClicked(clickedAnimal: Animal){
    console.log(clickedAnimal);
  }
}

export class Animal {
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public zooLocation: string,
    public numberOfCaretakersNeeded: number,
    public sex: string,
    public like: string,
    public dislike: string
  ) { }
}
