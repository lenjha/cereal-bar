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
     <select type="number" #newAvailability>
       <option value=100> 1 Order </option>
       <option value=200> 2 Orders </option>
       <option value=300> 3 Orders </option>
     </select>
     <button (click)="submitForm(newName.value, newSugarContent.value, newPrice.value, newAvailability.value)">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, sugarContent: string, price: string, availability: string) {
    var newKegToAdd: Keg = new Keg(name, parseInt(sugarContent), parseInt(price), parseInt(availability));
    console.log(typeof(availability));
    //Because our goal is to create a new Keg object anyway, it makes sense to construct it here before sending it upwards.
    console.log(newKegToAdd);
    this.newKegSender.emit(newKegToAdd);
  }
}
