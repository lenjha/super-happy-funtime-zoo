import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'animals-list',
    template: `
    <ul>
      <div *ngFor="let currentAnimal of childAnimalList" (click)="animalClicked(currentAnimal)">
      <h4>"{{currentAnimal.name}}" the {{currentAnimal.species}}</h4>
      <h5>{{currentAnimal.zooLocation}}</h5>
      <p>{{currentAnimal.age}} years old, {{currentAnimal.diet}} requiring {{currentAnimal.numberOfCaretakersNeeded}} caretaker(s)</p>
      <button (click)="editButtonClicked(currentAnimal)">Edit!</button> <hr>
      </div>
    </ul>
    `
})

export class AnimalsListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

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
