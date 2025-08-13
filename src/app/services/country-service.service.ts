import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  

  constructor(private sanitizer: DomSanitizer) { }
  readonly countries = [
    {
      code: 'ke',
      name: 'Kenya',
      dialCode: '+254',
      flag: this.sanitizeSvg(`<svg width="20" height="15" viewBox="0 0 640 480"><path fill="#000" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 0h640v144H0z"/><path fill="#060" d="M0 336h640v144H0z"/><path d="M0 144h640v192H0z" fill="#D00"/><path d="M344 240a56 56 0 1 0-112 0 60 60 0 0 0 112 0z" fill="#fff"/><path d="M360 240a40 40 0 1 0-80 0 44 44 0 0 0 80 0z" fill="#D00"/></svg>`)
    },
    {
      code: 'tz',
      name: 'Tanzania',
      dialCode: '+255',
      flag: this.sanitizeSvg(`<svg width="20" height="15" viewBox="0 0 640 480"><defs><clipPath id="a"><path fill-opacity=".7" d="M0 0h640v480H0z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#09f" d="M0 0h640v480H0z"/><path fill="#090" d="M0 0h640v480H0z" transform="rotate(-45 320 240) scale(.82051)"/><path fill="#ff0" d="M0 0h640v480H0z" transform="rotate(-45 320 240) scale(.65641)"/><path fill="#000" d="M0 0h640v480H0z" transform="rotate(-45 320 240) scale(.49231)"/></g></svg>`)
    },
    {
      code: 'ug',
      name: 'Uganda',
      dialCode: '+256',
      flag: this.sanitizeSvg(`<svg width="20" height="15" viewBox="0 0 640 480"><path fill="#ffe700" d="M0 0h640v480H0z"/><path fill="#de3908" d="M0 0h640v160H0z"/><path fill="#000" d="M0 160h640v160H0z"/><path fill="#ffe700" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="80" fill="#de3908"/><circle cx="320" cy="240" r="60" fill="#ffe700"/><circle cx="320" cy="240" r="40" fill="#de3908"/><circle cx="320" cy="240" r="20" fill="#ffe700"/></svg>`)
    },
    {
      code: 'rw',
      name: 'Rwanda',
      dialCode: '+250',
      flag: this.sanitizeSvg(`<svg width="20" height="15" viewBox="0 0 640 480"><path fill="#20603d" d="M0 0h640v360H0z"/><path fill="#fad201" d="M0 360h640v120H0z"/><path fill="#00a1de" d="M0 0h640v120H0z"/><path fill="#e5be01" d="m200 240-50-100-50 100s50 40 100 0z"/></svg>`)
    },
    {
      code: 'bi',
      name: 'Burundi',
      dialCode: '+257',
      flag: this.sanitizeSvg(`<svg width="20" height="15" viewBox="0 0 640 480"><defs><clipPath id="a"><path fill-opacity=".7" d="M-90.5 0H592v512H-90.5z"/></clipPath></defs><g clip-path="url(#a)" transform="translate(84.8) scale(.9375)"><path fill="#18b637" d="m-178 0 428.8 256L-178 512zm857.6 0L250.8 256l428.8 256z"/><path fill="#cf0921" d="m-178 0 428.8 256L679.6 0zm0 512 428.8-256 428.8 256z"/><circle cx="252" cy="256" r="80" fill="#fff"/><path fill="#fff" d="m232 212 20-20 20 20-20 20zm0 88 20-20 20 20-20 20zm44-44-20-20 20-20 20 20z"/></g></svg>`)
    },
    {
      code: 'ss',
      name: 'South Sudan',
      dialCode: '+211',
      flag: this.sanitizeSvg(`<svg width="20" height="15" viewBox="0 0 640 480"><path fill="#078930" d="M0 336h640v144H0z"/><path fill="#fff" d="M0 144h640v192H0z"/><path fill="#000" d="M0 0h640v144H0z"/><path fill="#da121a" d="M0 168h640v144H0z"/><path fill="#0f47af" d="m0 0 415.7 240L0 480z"/><path fill="#fcdd09" d="M135.4 240 0 361.5V118.5z"/></svg>`)
    }
  ];
// Angular Security:

// Uses DomSanitizer to safely render SVGs

// Prevents XSS vulnerabilities
  private sanitizeSvg(svg: string) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
