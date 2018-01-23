import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal!</h1>
  <div>
    <label>Enter New Animal Information!</label><br>
    <label>Name</label>
    <input #newName><br>
    <label>Species</label>
    <input #newSpecies><br>
    <label>Age</label>
    <input #newAge><br>
    <label>Diet</label>
    <select #newDiet>
      <option value="Carnivore">Carnivore</option>
      <option value="Omnivore">Omnivore</option>
      <option value="Herbivore">Herbivore</option>
    </select><br>
    <label>Zoo Location</label>
    <input #newZooLocation><br>
    <label># of Caretakers</label>
    <input #newNumberOfCaretakersNeeded><br>
    <label>Sex</label>
    <input #newSex><br>
    <label>Like</label>
    <input #newLike><br>
    <label>Dislike</label>
    <input #newDislike><br>
    <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newZooLocation.value, newNumberOfCaretakersNeeded.value, newSex.value, newLike.value, newDislike.value)">Add Animal!</button>
  </div>
  `
})

export class NewAnimalComponent {
@Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, zooLocation: string, numberOfCaretakersNeeded: number, sex: string, like: string, dislike: string) {
    var newAnimaltoAdd: Animal = new Animal(name, species, age, diet, zooLocation, numberOfCaretakersNeeded, sex, like, dislike);
    console.log(newAnimaltoAdd);
    this.newAnimalSender.emit(newAnimaltoAdd);
  }
}
