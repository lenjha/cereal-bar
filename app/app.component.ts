import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Serial Barre</h1>
    <h3>{{currentKegList}}</h3>
    <ul *ngFor='let currentKeg of kegs'>
      <div [class]="availabilityColor(currentKeg)">
        <h3>{{currentKeg.name}}<button (click)="updateKeg(currentKeg)">Update</button></h3>
        <h4>Sugar Content (g): {{currentKeg.sugarContent}}</h4>
        <h4>Price per bowl (USD): {{currentKeg.price}}</h4>
      </div>
    </ul>

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
  `
})

export class AppComponent {
  //component class is what this is declares how component BEHAVES
  currentKegList: string = 'Cereal on Tap';
  kegs: Keg[] = [
    new Keg("Oreo-Os", 13, 2.60, 3),
    new Keg("Froot Loops", 12, 2, 3),
    new Keg('Golden Grahams', 11, 3, 3),
    new Keg("Cap'n Crunch's Crunch Berries", 12, 3, 2),
    new Keg('Trix', 12, 3.5, 3),
    new Keg('Lucky Charms', 11, 3.5, 1),
  ];//instead of using literal notation, using Keg constructor (see below); b/c we've exported a Keg class, Keg is now a valid data type for variables

selectedKeg = null;


availabilityColor(currentKeg){
  if (currentKeg.availability === 3){
    return "bg-success";
  } else if (currentKeg.availability === 2) {
    return  "bg-warning";
  } else {
    return "bg-danger";
  }
}

finishedEditing() {
  this.selectedKeg = null;
}

}

export class Keg {
  constructor(public name: string, public sugarContent: number, public price: number, public availability: number){ }
}
//Keg class is our model; it resides OUTSIDE of AppComponent class and includes keyword export so other areas of app can access it
// <ul>
//   <li </li>
//   <li *ngFor='let price of keg.price'>{{price}}</li>
// </ul>
