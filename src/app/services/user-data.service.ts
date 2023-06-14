import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return[
      {name:'ravinder',email:'ravinder@gmail.com'},
      {name:'ravi',email:'ravi@gmail.com'},
      {name:'mahi',email:'mahi@gmail.com'},
      {name:'virat',email:'virat@gmail.com'},
    ]
  }

  // import userDataService in service-example-component and footer-component to use this similar type of data.
}
