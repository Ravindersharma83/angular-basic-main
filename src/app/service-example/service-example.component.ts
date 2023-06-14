import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service'; // importing userDataService from services file

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  // get service data in the constructor method 
  memberData : {name:string,email:string}[] = [];
  constructor(private userData:UserDataService) { 
    console.log(userData.users());
    this.memberData = userData.users();
  }

  ngOnInit(): void {
  }
  title = 'Service in Angular';
  // memberData=[
  //   {name:'ravinder',email:'ravinder@gmail.com'},
  //   {name:'ravi',email:'ravi@gmail.com'},
  //   {name:'mahi',email:'mahi@gmail.com'},
  //   {name:'virat',email:'virat@gmail.com'},
  // ];
  
}
