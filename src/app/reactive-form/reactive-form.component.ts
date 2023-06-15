import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  submitted = false;

  loginForm = new FormGroup({
    user : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  loginUser(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  get userValidator(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor() { }
  ngOnInit(): void {
  }

}
