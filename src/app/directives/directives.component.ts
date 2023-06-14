import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products:{id:number,name:string,available:boolean}[] = [
    {id:1,name:"mobile",available:true},
    {id:1,name:"laptops",available:true},
    {id:1,name:"TV",available:true},
    {id:1,name:"Ac",available:false},
  ];
}
