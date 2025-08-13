import { SafeHtml } from '@angular/platform-browser';
export interface CountryDTO{
    code:string;
    name:string;
    dialCode:string;
    flag:SafeHtml;  // Changed from SVGStringList
}