import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';
import { SigninComponent } from './shared/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SignupComponent } from './shared/signup/signup.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { BookVehicleComponent } from './booking/book-vehicle/book-vehicle.component';
import { AddVehicleComponent } from './user/add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    SigninModalComponent,
    SigninComponent,
    SignupComponent,
    ResetPasswordComponent,
    BookVehicleComponent,
    AddVehicleComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
