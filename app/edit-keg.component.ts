import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf='childSelectedKeg'>
      <h3>{{childSelectedKeg.name}}</h3>
      <hr>
      <h3>Edit Keg</h3>
      <label>Enter Keg Description:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter Keg Availability (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="childSelectedKeg.availability" [value]="1">1 (Low Availability)<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.availability" [value]="2">2 (Medium Availability)<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.availability" [value]="3">3 (High Availability)
      <button (click)="doneButtonClicked()">Done</button>
     </div>
   </div>`
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();
  // "childSelectedKeg" and "doneButtonClickedSender" could be anything really, but this is called using a descriptive variable so people can understand it easier

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
