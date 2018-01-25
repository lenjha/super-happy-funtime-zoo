import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
    selector: 'animals-list',
    template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">View all animals</option>
      <option value="youngAnimals">View young animals (2 years and younger)</option>
      <option value="olderAnimals">View older animals (older than 2 years)</option>
    </select>
    <ul>
      <div *ngFor="let currentAnimal of childAnimalList | animalAge:filterAnimalAge" [class]="dietColor(currentAnimal)">
      <h4>"{{currentAnimal.name}}" the {{currentAnimal.species}}</h4>
      <h5>{{currentAnimal.zooLocation}}</h5>
      <p>{{currentAnimal.age}} years old, {{currentAnimal.diet}} requiring {{currentAnimal.numberOfCaretakersNeeded}} caretaker(s)</p>
      <button (click)="editButtonClicked(currentAnimal)">Edit!</button> <hr>
      </div>
    </ul>
    `
})
// Don't keep old code in the divs silly - you confused the "clickedAnimal" variable

export class AnimalsListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterAnimalAge: string = "allAnimals";

  onChange(filterAnimalList){
    this.filterAnimalAge = filterAnimalList;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  // animalClicked(clickedAnimal: Animal){
  //   console.log(clickedAnimal);
  //   this.clickSender.emit(animalToEdit);
  // }

  dietColor(currentAnimal){
    if (currentAnimal.diet === "Carnivore"){
      return "carnivore-color";
    } else if (currentAnimal.diet === "Omnivore"){
      return "omnivore-color";
    } else {
      return "herbivore-color";
    }
  }
}
