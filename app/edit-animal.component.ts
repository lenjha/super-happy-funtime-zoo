import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="selectedAnimal">
    <h4>Name: {{selectedAnimal.name}}</h4>
    <p> Species: {{selectedAnimal.species}}</p>
    <p>Age (in years): {{selectedAnimal.age}}</p>
    <p>Diet: {{selectedAnimal.diet}}</p>
    <p>Zoo Location: {{selectedAnimal.zooLocation}}</p>
    <p># of Caretakers: {{selectedAnimal.numberOfCaretakersNeeded}}</p>
    <p>Sex: {{selectedAnimal.sex}}</p>
    <p>Like: {{selectedAnimal.like}}</p>
    <p>Dislike: {{selectedAnimal.dislike}}</p>

    <h3>Edit Animal</h3>
    <label>Name</label>
    <input [(ngModel)]="selectedAnimal.name"><br>
    <label>Species</label>
    <input [(ngModel)]="selectedAnimal.species"><br>
    <label>Age</label>
    <input [(ngModel)]="selectedAnimal.age"><br>
    <label>Zoo Location</label>
    <input [(ngModel)]="selectedAnimal.zooLocation"><br>
    <label># of Caretakers</label>
    <input [(ngModel)]="selectedAnimal.numberOfCaretakersNeeded"><br>
    <label>Sex</label>
    <input [(ngModel)]="selectedAnimal.sex"><br>
    <label>Like</label>
    <input [(ngModel)]="selectedAnimal.like"><br>
    <label>Dislike</label>
    <input [(ngModel)]="selectedAnimal.dislike"><br>
    <button (click)="doneButtonClicked()">Finished!</button>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
