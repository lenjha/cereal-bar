import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Name:</label>
      <input #newName><br>
      <label>Enter Sugar Content:</label>
      <input #newSugarContent><br>
      <label>Enter Price:</label>
      <input #newPrice>
    </div>
    <div>
     <label>Keg Availability:</label>
     <select #newAvailability>
       <option [value]="1"> Low Availability </option>
       <option [value]="2"> Medium Availability </option>
       <option [value]="3"> High Availability </option>
     </select>
     <button (click)="submitForm(newName.value, newSugarContent.value, newPrice.value, newAvailability.value)">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, sugarContent: number, price: number, availability: number) {
    var newKegToAdd: Keg = new Keg(name, sugarContent, price, availability);
    //Because our goal is to create a new Keg object anyway, it makes sense to construct it here before sending it upwards.
    this.newKegSender.emit(newKegToAdd);
  }
}
