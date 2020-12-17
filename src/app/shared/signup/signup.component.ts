import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
fname:string;
lname:string;
email:string;
mobile:string
password:string
conpassword:string
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(credentials:NgForm){
  alert(credentials);
}
}
