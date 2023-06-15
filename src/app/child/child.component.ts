import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() item:string = '';
  @Input() item:number|string = 0; // getting data from parent component

  // sending data from child to parent
  @Output() updateDataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
