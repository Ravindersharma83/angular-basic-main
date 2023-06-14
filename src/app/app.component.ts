import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = 'Ravinder';
  interpolationFunction(name:string){
    return "Interpolation in Angular " + name;
  }
  show = true;
  color="red";

  propertyValue="Example of property binding";
  disable=false

  getInputValue='';
  getData(item:string){
    // alert(item);
    this.getInputValue = item;
  }

  updateData(item:string){
    console.log(item);
  }

  users = ["Ravinder","Himanshu", "Chaman", "Sachin", "Nik"];
  userDetails = [
    {name:"Ravinder",email:'Ravinder@gmail.com',socialAccounts:['Insta','Facebook','Whatsapp']},
    {name:"Himanshu",email:'Himanshu@gmail.com',socialAccounts:['Insta','Facebook','Whatsapp']},
    {name:"Chaman",email:'Chaman@gmail.com',socialAccounts:['Insta','Facebook','Whatsapp']},
    {name:"Sachin",email:'Sachin@gmail.com',socialAccounts:['Insta','Facebook','Whatsapp']},
    {name:"Nik",email:'Nik@gmail.com',socialAccounts:['Insta','Facebook','Whatsapp']},
  ];

  // getData(data:string){
  //   console.log(data);

  // }
}
