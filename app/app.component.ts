import { Component } from '@angular/core';
// import { AnimalsListComponent } from './animals-list.component';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo is Ready!</h1>
    <h3>{{currentAnimalList}}</h3>
    <hr>
    <animals-list [childAnimalList]="masterAnimalsList" (clickSender)="editAnimal($event)"></animals-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Current Beasts';
  selectedAnimal = null;

  masterAnimalsList: Animal[] = [
    new Animal("Pomeranian", "Ameribo Vespoochi", 2, "Carnivore", "Canine Carnival", 5, "male", "food", "loud noises"),
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

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalsList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }
}
