import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'animals-list',
    template: `
    <ul>
      <li [class]="dietColor(currentAnimal)" (click)="animalClicked(currentAnimal)" *ngFor="let currentAnimal of animals"> "{{currentAnimal.name}}" the {{currentAnimal.species}}
      <button (click)="editAnimal(currentAnimal)"> Edit!</button></li>
    </ul>
    `
})

export class AnimalsListComponent {
  @Input() childAnimalList: Animal[];

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
