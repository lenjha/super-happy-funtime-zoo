import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'animals-list',
    template: `
    <ul>
      <li (click)="animalClicked(currentAnimal)" *ngFor="let currentAnimal of animals"> "{{currentAnimal.name}}" the {{currentAnimal.species}}
      <button (click)="editButtonClicked(currentAnimal)"> Edit!</button></li>
    </ul>
    `
})

//[class]="dietColor(currentAnimal)"



export class AnimalsListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  // animalClicked(clickedAnimal: Animal){
  //   console.log(clickedAnimal);
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
