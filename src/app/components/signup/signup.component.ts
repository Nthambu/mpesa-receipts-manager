import { AuthService } from './../../shared/services/auth/auth.service';
import { GlobalMessagingService } from './../../shared/services/messaging/global-messaging.service';
import { CountryServiceService } from './../../services/country-service.service';
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CountryDTO } from 'src/app/data/countriesDTO';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  passwordMismatch=false;
  isLoading = false; // For loading state
constructor(
  private fb:FormBuilder,
  private countryService:CountryServiceService,
  private globalMessagingService:GlobalMessagingService,
  private authService:AuthService,
  private router:Router
){}
ngOnInit(){
  this.initializeForm();
 
  
 
}
initializeForm():void{
  this.signupForm=this.fb.group({
    fullName:['',[Validators.required,Validators.minLength(3)]],
    phone:['',Validators.required],
    countryCode:[this.selectedCountry.dialCode,Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  })

}
// Helper getter for easy access to form controls in the template
  get f() { 
    return this.signupForm.controls; 
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
   this.signupForm.get('countryCode')?.setValue(country.dialCode); // <-- ADD THIS LINE
  this.signupForm.get('phone')?.setValue('',{emitEvent:false});
 
}
validateKenyanPhone(phone: string): boolean {
  const digits = phone.replace(/\s/g, '');
  return /^[17]\d{8}$/.test(digits); // Starts with 7 or 1
}

validateForm():void{
 
  let formValues = this.signupForm.value;
  let requiredFields =['phone','password','confirmPassword','fullName'];
  let password =  this.signupForm.get('password')?.value;
  let confirmPassword =  this.signupForm.get('confirmPassword')?.value;
  for(let field of requiredFields){
    const formControls =  this.signupForm.get(field);
if(formControls && !formControls.valid){
  this.showbtn=true;
  this.globalMessagingService.displayErrorMessage('Warning','please fill the required fields');

  return
}
}
 if(password !== confirmPassword){
 
  this.globalMessagingService.displayInfoMessage('warning','please match the passwords');
  this.passwordMismatch=true;
  return

}else{

this.isLoading = true;
this.submitForm();

  }


}
submitForm():void{

const  formData = {
  fullName:this.signupForm.value.fullName,
  password:this.signupForm.value.password,
  phone:`${this.selectedCountry.dialCode}${this.signupForm.value.phone.replace(/\D/g, '')}`
}
  this.authService.signUp(FormData).subscribe({
    next:(response)=>{
      this.isLoading = false;
      this.globalMessagingService.displaySuccessMessage('success','registration a success');
      this.router.navigate(['/login']); // Redirect to login after success
    },
    error:(err)=>{
      this.isLoading = false;
      this.globalMessagingService.displayErrorMessage('error','failed to sign up,Try Again!');

    }
  })

}
}
