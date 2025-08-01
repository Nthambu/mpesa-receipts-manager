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
    // Detect system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = this.sessionStorage.getItem('darkMode');
    
    this.isDarkMode = savedMode ? savedMode === 'true' : systemPrefersDark;
}
toggleTheme():void{
  this.isDarkMode = !this.isDarkMode;
    this.sessionStorage.setItem('darkMode', String(this.isDarkMode));
  


}

navigateToLogin():void{
   this.toggleTheme(); // Ensure theme is saved before navigation
this.router.navigate(['/login']);

}
}
