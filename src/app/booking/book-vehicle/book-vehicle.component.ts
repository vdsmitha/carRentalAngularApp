import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-book-vehicle',
  templateUrl: './book-vehicle.component.html',
  styleUrls: ['./book-vehicle.component.scss']
})
export class BookVehicleComponent implements OnInit {
  private stepper: Stepper;
 
  constructor() { }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }
  prev(){
    this.stepper.previous();
  }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }
}
