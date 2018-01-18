import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Serial Barre</h1>
    <h3>{{currentKegList}}</h3>
    <keg-list></keg-list>
    <div>
      <div *ngIf='selectedKeg'>
        <h3>{{selectedKeg.name}}</h3>
        <hr>
        <h3>Edit Keg</h3>
        <label>Enter Keg Description:</label>
        <input [(ngModel)]="selectedKeg.name">
        <label>Enter Keg Availability (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedKeg.availability" [value]="1">1 (Low Availability)<br>
        <input type="radio" [(ngModel)]="selectedKeg.availability" [value]="2">2 (Medium Availability)<br>
        <input type="radio" [(ngModel)]="selectedKeg.availability" [value]="3">3 (High Availability)
        <button (click)="finishedEditing()">Done</button>
       </div>
     </div>
    </div>
  `
})

export class AppComponent {
  currentKegList: string = 'Cereal on Tap';
  //component class is what this is declares how component BEHAVES
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }


  finishedEditing() {
    this.selectedKeg = null;
  }

}

//Keg class is our model; it resides OUTSIDE of AppComponent class and includes keyword export so other areas of app can access it
// <ul>
//   <li </li>
//   <li *ngFor='let price of keg.price'>{{price}}</li>
// </ul>
