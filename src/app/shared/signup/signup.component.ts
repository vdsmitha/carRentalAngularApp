import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signup=new User();
  constructor(private router:Router, private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  signupUser(){
    this.authService.signup(this.signup).subscribe(result =>{
        //success
        console.log(result);
        this.authService.saveUser(this.signup);
        alert('Signup successful');
      
    },err =>{
      alert(JSON.stringify(err));
    });
  }
}
