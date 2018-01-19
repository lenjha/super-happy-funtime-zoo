import { Component } from '@angular/core';

@Component({
  selector: 'animals-list',
  template: `
  <ul>
    <li (click)="animalClick(thisAnimal)" *ngFor="let thisAnimal of animals">"{{thisAnimal.name}}" the {{thisAnimal.species}} is present! <button (click)="editAnimal()"> Edit!</button></li>
  </ul>
  `
})

export class AnimalsListComponent {
  animals: Animal[] = [
    new Animal("Gray Wolf", "Ameribo Vespoochi", 2, "Carnivore", "Canine Carnival", 5, "male", "food", "people"),
    new Animal("European Central Boar", "Piggi Longsmockings", 1, "Omnivore", "The Boar Moors", 5, "female", "food", "people"),
    new Animal("Siberian Chipmunk", "Radimir Putin", 3, "Omnivore", "Rodent Roundabout", 5, "male", "food", "people"),
    new Animal("Holstein Friesian Cattle", "Joan Henrietta", 1, "Herbivore", "Farmhand Farmy's Fun Farm", 5, "female", "food", "people"),
    new Animal("Amur Tiger", "El Tigre, El Mejor Tigre", 7, "Carnivore", "Feline Festivale", 5, "male", "food", "people"),
    new Animal("Dwarf Hotot", "Empress Maria Theresa the Hopsburg", 3,  "Herbivore", "Rodent Roundabout", 5, "female", "food", "people"),
    new Animal("Komodo Dragon", "Elizabeth", 12, "Carnivore", "Danger Zone", 5, "female", "food", "people"),
    new Animal("Ball Python", "Sssssimple Sssssimon", 9, "Carnivore", "Snakeland Land of Snakes", 5, "male", "food", "people"),
    new Animal("Palomino", "Don Palamino", 5, "Herbivore", "Farmhand Farmy's Fun Farm", 5, "male", "food", "people"),
    new Animal("Dall Sheep", "U Dun Goof'd", 4, "Herbivore", "The Mountains", 5, "male", "food", "people"),
    new Animal("Proboscis Monkey", "Innuendo", 7, "Omnivore", "Danger Zone", 5, "male", "food", "people"),
    new Animal("Black-Capped Chickadee", "Rooster", 2, "Omnivore", "The Mountains", 5, "female", "sunflower seeds", "people"),
  ];

  animalClick(thisAnimal: Animal){
    console.log(thisAnimal)
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
