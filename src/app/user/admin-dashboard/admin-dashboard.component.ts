import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleServiceService } from '../vehicle-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
vehicles:Vehicle[];
  constructor(private vehicleService:VehicleServiceService) { }

  ngOnInit(): void {
    this.vehicleService.getAllVehicle().subscribe(result =>{
      this.vehicles=result;
      console.log(this.vehicles);
    },err => alert(JSON.stringify(err)));
  }

}
