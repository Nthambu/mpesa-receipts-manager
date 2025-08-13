import { CountryServiceService } from './../../services/country-service.service';
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CountryDTO } from 'src/app/data/countriesDTO';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  imgSrc="assets/images/receipt.png";
  signupForm!:FormGroup;
  countries=this.countryService.countries;
  
   
    selectedCountry = this.countries[0]; // Default to Kenya
  showCountryList=false;
  showbtn=false;
constructor(
  private fb:FormBuilder,
  private countryService:CountryServiceService
){}
ngOnInit(){
  this.initializeForm();
 
  
 
}
initializeForm():void{
  this.signupForm=this.fb.group({
    fullName:['',Validators.required],
    phone:['',Validators.required],
    countryCode:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  })

}

formatPhone(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    // Update the form control with cleaned value
  //Use { emitEvent: false } when you want to change
  //  a form control’s value silently without 
  // triggering the rest of Angular’s form machinery.
  // “Update the value, but don’t fire the 
  // valueChanges or 
  // statusChanges events.”
    // Kenyan-specific formatting
    if (this.selectedCountry?.code === 'ke') {
      if (value.length > 9) value = value.substring(0, 9);
      if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
      } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{3})/, '$1 $2');
      }
    }
    
    event.target.value = value;
  }
selectCountry(country:any):void{
  this.selectedCountry=country;
  this.showCountryList=false;
 
  this.signupForm.get('phone')?.setValue('',{emitEvent:false});
}
validateKenyanPhone(phone: string): boolean {
  const digits = phone.replace(/\s/g, '');
  return /^[17]\d{8}$/.test(digits); // Starts with 7 or 1
}
validateForm():void{
 
  let formValues = this.signupForm.value;
if(formValues.fullName == ''){
  this.showbtn = true;
}
  let requiredFields = [formValues.phone,formValues.countryCode,formValues.password,formValues.confirmPassword,formValues.fullName];
  console.log('required fields>',requiredFields);
  if(formValues.password !== formValues.confirmPassword){
    console.log('password is>',formValues.password);
    console.log('confirmed password is:',formValues.confirmPassword);
    alert('please match the passwords')
    return;

  }
  if(formValues.phone == null){
    alert('phone number cannot be empty');
  }
  if(!formValues.password.valid || !formValues.phone.valid || !formValues.fullName.valid || !formValues.confirmPassword.valid){
alert('Please fill all the required fields');
return;
  }else{
    alert('okay')
  }
}
}
