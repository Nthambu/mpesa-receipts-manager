import { Component } from '@angular/core';
import {SessionStorageService} from '../services/session-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private sessionStorage:SessionStorageService){}
ngOnInit(){
  const item = this.sessionStorage.getItem('dark');
 
  if (item){
    console.log('m boolean is:',item);
  }else{
    return;
  }
  const item1 = this.sessionStorage.getItem('name');
 

  console.log('json stored is:',item);
  console.log('Name stored is:',item1);
}
}
