import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <div *ngFor='let currentKeg of childKegList' [class]="availabilityColor(currentKeg)">
      <!--div has the currentKeg info to encompass all the h's-->
        <h3>{{currentKeg.name}}<button (click)="editButtonHasBeenClicked(currentKeg)">Update</button></h3>
        <h4>Sugar Content (g): {{currentKeg.sugarContent}}</h4>
        <h4>Price per bowl (USD): {{currentKeg.price}}</h4>
      </div>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }


  availabilityColor(currentKeg){
    if (currentKeg.availability === 3){
      return "bg-success";
    } else if (currentKeg.availability === 2) {
      return  "bg-warning";
    } else {
      return "bg-danger";
    }
  }
}
