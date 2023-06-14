import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service'; // importing userDataService from services file


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  memberData : {name:string,email:string}[] = [];
  constructor(private userData:UserDataService) { 
    this.memberData = userData.users();
   }

  ngOnInit(): void {
  }

}
