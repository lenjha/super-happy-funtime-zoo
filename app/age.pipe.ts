import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "animalAge",
  pure: false
})

export class AnimalAgePipe implements PipeTransform {
  transform(input:Animal[], olderAnimals) {
    var output: Animal[] = [];
    if (olderAnimals === "allAnimals"){
      for (var i = 0; i < input.length; i++){
        output.push(input[i]);
      }
      return output;
    }
    else if (olderAnimals === "youngAnimals"){
      for (var i = 0; i < input.length; i++){
        if (input[i].age <= 2 ) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (olderAnimals === "olderAnimals"){
      for (var i = 0; i < input.length; i++){
        if (input[i].age > 2 ) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
