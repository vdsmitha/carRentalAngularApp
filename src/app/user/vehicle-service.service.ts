import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ Vehicle} from 'src/app/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
 private url='http://localhost:8080/hirewheels/v1/vehicles';
  constructor(private httpClient:HttpClient) { }

  getAllVehicle(){
    return this.httpClient.get<Vehicle[]>(this.url);
  }
  addVehicle(vehicle:Vehicle){
    return this.httpClient.post<Vehicle>(this.url,vehicle);
  }
}
