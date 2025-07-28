import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageService} from '../services/session-storage.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
   isDarkMode = false;
  constructor(private router: Router,private sessionStorage:SessionStorageService){
   
  }
ngOnInit(){
   // Initialize theme from storage
    const savedMode = this.sessionStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
 
}
toggleTheme():void{
  this.isDarkMode = !this.isDarkMode; // Toggle current state
this.isDarkMode=true;// No need to stringify a simple string
 this.sessionStorage.setItem('dark', JSON.stringify(true)); 
    this.sessionStorage.setItem('name', 'frank'); 

}
navigateToLogin():void{
   this.toggleTheme(); // Ensure theme is saved before navigation
this.router.navigate(['/login']);

}
}
