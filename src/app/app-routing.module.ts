import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookVehicleComponent } from './booking/book-vehicle/book-vehicle.component';
import { BookingRoutingModule } from './booking/booking-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';
import { SigninComponent } from './shared/signin/signin.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { UserRoutingModule } from './user/user-routing.module';


const routes: Routes = [
  {path:'signmodal',component:SigninModalComponent},
 {path:'',component:HomeComponent},

 
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BookingRoutingModule,CoreRoutingModule,UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
