import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayhello(inputEl:HTMLInputElement){
    // alert("Hello "+inputEl.value);
    console.log(inputEl);
    
  }

}
