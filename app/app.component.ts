import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Serial Barre</h1>
    <h3>{{currentKegList}}</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    </div>
  `
})

export class AppComponent {
  currentKegList: string = 'Cereal on Tap';
  //component class is what this is declares how component BEHAVES
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg("Oreo-Os", 13, 2.60, 3),
    new Keg("Froot Loops", 12, 2, 3),
    new Keg('Golden Grahams', 11, 3, 3),
    new Keg("Cap'n Crunch's Crunch Berries", 12, 3, 2),
    new Keg('Trix', 12, 3.5, 3),
    new Keg('Lucky Charms', 11, 3.5, 1),
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }


  finishedEditing() {
    this.selectedKeg = null;
  }

}

//Keg class is our model; it resides OUTSIDE of AppComponent class and includes keyword export so other areas of app can access it
