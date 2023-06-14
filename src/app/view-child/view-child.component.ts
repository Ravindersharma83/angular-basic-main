import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('dobInput') dateOfBirth : ElementRef= new ElementRef(null); 
  @ViewChild('ageInput') userAge : ElementRef = new ElementRef(null); 

  constructor() { 
   }


  ngOnInit(): void {
  }

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.userAge.nativeElement.value = age;
  }

}
