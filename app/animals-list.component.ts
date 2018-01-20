import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'animals-list',
    template: `
    <ul>
      <div *ngFor="let currentAnimal of animals" (click)="animalClicked(currentAnimal)">
      <h3>"{{currentAnimal.name}}" the {{currentAnimal.species}}</h3>
      <h5>{{currentAnimal.zooLocation}}</h5>
      <button (click)="editButtonClicked(currentAnimal)"> Edit!</button></div>
    </ul>
    `
})

export class AnimalsListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  animalClicked(clickedAnimal: Animal){
    console.log(clickedAnimal);
  }

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
