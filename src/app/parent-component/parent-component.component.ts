import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentData = 10;

  updateChild(){
    this.parentData = Math.floor(Math.random() *10 );
  }

  // child to parent data transfer
  updateData(item:string){
    alert(item)
    
  }

}
