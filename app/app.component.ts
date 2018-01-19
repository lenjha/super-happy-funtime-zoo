import { Component } from '@angular/core';
import { AnimalsListComponent } from './animals-list.component'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo is Ready!</h1>
    <h3>{{currentFocus}}</h3>
    <animals-list></animals-list>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Current Beasts';

  editAnimal(){
    console.log("edit!");
  }



}
