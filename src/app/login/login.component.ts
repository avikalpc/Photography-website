import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private router:Router){
}

username:any;
  password:any;
  pwd:any;
  user:any;
  submit()
  {
  this.pwd="123"
  if(this.password==this.pwd)
  {
    this.user={
      'username':this.username,
      'password':this.password
    }
    localStorage.setItem('loggedinuser',JSON.stringify(this.user));
    this.router.navigateByUrl('/user/home')
  }
  }
  



}