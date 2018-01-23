import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Edit Animal</h3>
      <label>Name</label>
      <input [(ngModel)]="childSelectedAnimal.name" type="text"><br>
      <label>Species</label>
      <input [(ngModel)]="childSelectedAnimal.species" type="text"><br>
      <label>Age</label>
      <input [(ngModel)]="childSelectedAnimal.age" type="number"><br>
      <label>Zoo Location</label>
      <input [(ngModel)]="childSelectedAnimal.zooLocation" type="text"><br>
      <label># of Caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.numberOfCaretakersNeeded" type="number"><br>
      <label>Sex</label>
      <input [(ngModel)]="childSelectedAnimal.sex" type="text"><br>
      <label>Like</label>
      <input [(ngModel)]="childSelectedAnimal.like" type="text"><br>
      <label>Dislike</label>
      <input [(ngModel)]="childSelectedAnimal.dislike" type="text"><br>
      <button (click)="doneButtonClicked()">Finished!</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
    console.log(this.childSelectedAnimal);
  }
}
