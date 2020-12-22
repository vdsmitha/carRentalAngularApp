import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { VehicleServiceService } from '../vehicle-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  vehicleForm:FormGroup
  constructor(private location:Location,private vehicelService:VehicleServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vehicleForm=this.formBuilder.group({
      vehicleName:['',Validators.required],
      vehicleNumber:['',Validators.required],
      vehicleCategory:['',Validators.required],
      fuelType:['',Validators.required],
      vehiclesubCategory:['',Validators.required],
      vehicleColor:['',Validators.required],
      availLocation:['',Validators.required],
      url:['',Validators.required]

    })
  }

goBack(){
  this.location.back();
}
addVehicle(){
  
}
}
