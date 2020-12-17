import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
email:string
mobile:string
password:string
conpassword:string
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(credentials:NgForm){

}
}
