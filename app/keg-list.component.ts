import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All cereals</option>
    <option value="diabeticFriendly">Diabetic-friendly</option>
  </select>
    <ul>
      <div *ngFor='let currentKeg of childKegList | sugarLevel:filterBySugarLevel' [class]="availabilityColor(currentKeg)">
      <!--div has the currentKeg info to encompass all the h's-->
        <h3>{{currentKeg.name}}<button (click)="editButtonHasBeenClicked(currentKeg)">Update</button></h3>
        <h4>Sugar Content (g): {{currentKeg.sugarContent}}</h4>
        <h4>Price per bowl (USD): {{currentKeg.price}}</h4>
        <h4>Availability: {{currentKeg.availability}}</h4>
        <button (click)="orderUpButtonHasBeenClicked(currentKeg)">Order Up!</button>
      </div>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterBySugarLevel: string = "allKegs";

  onChange(optionFromMenu){
    this.filterBySugarLevel = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  orderUpButtonHasBeenClicked(currentKeg) {
    if (currentKeg.availability > 0) {
      currentKeg.availability -= 1;
    } else {
      currentKeg.availability = "WE ARE OUT; ORDER SOMETHING ELSE!";
    }
  }


  availabilityColor(currentKeg){
    if (currentKeg.availability > 50){
      return "bg-success";
    } else if (currentKeg.availability > 11) {
      return  "bg-warning";
    } else {
      return "bg-danger";
    }
  }
}
