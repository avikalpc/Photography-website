import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  jsonuser:any;
  user:any;
  username:any;
constructor(private router:Router){

}  
ngOnInit(){
  if(localStorage.getItem('loggedinuser')==null)
  {
    this.router.navigateByUrl('')
  }
  else{
    this.jsonuser=localStorage.getItem('loggedinuser');
    this.user=JSON.parse(this.jsonuser);
    this.username=this.user.username
  }
}
logout(){
localStorage.removeItem('loggedinuser')  
this.router.navigateByUrl('')
}













}
