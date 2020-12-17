import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';

const routes: Routes = [
    {path:'book',component:BookVehicleComponent},
    
    
   
    
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class BookingRoutingModule{}
  