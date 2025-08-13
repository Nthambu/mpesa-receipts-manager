import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = environment.apiUrl; // Your backend API URL
  constructor(private http:HttpClient) { }
  signUp(formdata:any):Observable<any>{
return this.http.post(`${this.apiUrl}/auth/signup`,formdata);
  }
}
