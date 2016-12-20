import { Component, OnInit } from '@angular/core';
import {  User } from './signup.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit { //can be left empty except we need to set initial data or declear a 
  //submit method.
  user:User = {
    name: '',
    account:{
      email : '',
      confirm: ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:User, valid:boolean}) {
    
  }

}
