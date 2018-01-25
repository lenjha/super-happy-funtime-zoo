import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalsListComponent } from './animals-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AnimalAgePipe } from './age.pipe';

@NgModule({
  imports: [BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                  AnimalsListComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  AnimalAgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
