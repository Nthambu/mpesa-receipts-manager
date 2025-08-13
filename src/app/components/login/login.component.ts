import { SessionStorageService } from './../../services/session-storage.service';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { Component } from '@angular/core';

import { ReactiveFormsModule,FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CountryDTO } from 'src/app/data/countriesDTO';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //I have used property binding to send data to src attribute in view
  imageSrc="assets/images/receipt.png";
  //Let us bind the alt directive with the value
  alternative = "M Receipts Logo";
//Initialize a form
// The ! tells TypeScript: "I promise I will initialize this before using it".
loginForm!:FormGroup;
 // Data
  countries = this.countryService.countries;
  selectedCountry = this.countries[0]; // Default to Kenya
  showCountryList = false;
  
  // Form fields
  phoneNumber = '';
  password = '';
constructor(private sessionStorage:SessionStorageService,
  private fb:FormBuilder,
 private countryService:CountryServiceService){}
ngOnInit(){
 
  //always initialize your from first
  this.initializeForm();
  const item = this.sessionStorage.getItem('dark');
 
  if (item){
    //console.log('m boolean is:',item);
  }else{
    return;
  }
  const item1 = this.sessionStorage.getItem('name');


  // console.log('json stored is:',item);
  // console.log('Name stored is:',item1);
}
//initialize your form
initializeForm():void{
this.loginForm = this.fb.group({
 password:['',Validators.required],
    phone:['',Validators.required,]
})
}
checkForm():void{
  const formValues=this.loginForm.value;
 
}

  selectCountry(country: any): void {
    this.selectedCountry = country;
    this.showCountryList = false;
    
  }
getPhonePlaceholder(): string {
  return this.selectedCountry.code === 'ke' 
    ? '712 345 678' 
    : 'XXX XXX XXX';
}
  formatPhone(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    
    // Kenyan-specific formatting
    if (this.selectedCountry.code === 'ke') {
      if (value.length > 9) value = value.substring(0, 9);
      if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
      } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{3})/, '$1 $2');
      }
    }
    
    event.target.value = value;
  }
  login(): void {
    const fullNumber = `${this.selectedCountry.dialCode}${this.phoneNumber.replace(/\s/g, '')}`;
   
    // Add your login logic here
  }

validateKenyanPhone(phone: string): boolean {
  const digits = phone.replace(/\s/g, '');
  return /^[17]\d{8}$/.test(digits); // Starts with 7 or 1
}
}
