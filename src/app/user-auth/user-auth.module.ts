import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  // export module to make it publically availabele
  exports:[
    LoginComponent
  ],
})
export class UserAuthModule { }
